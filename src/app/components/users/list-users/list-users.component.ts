import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';  // Importar Bootstrap para manejar el modal
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-list-users',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  standalone: true,
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: any[] = [];
  totalUsers: number = 0;
  currentPage: number = 1;
  pageSize: number = 10;
  filterId: string = '';  // Filtro de búsqueda por ID
  editUserForm: FormGroup;  // Formulario para editar el usuario
  currentUserId: number | null = null;  // ID del usuario que estamos editando

  constructor(private userService: UserService, private fb: FormBuilder) {
    // Crear el formulario de edición
    this.editUserForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]  // Agregamos el campo password
    });
  }
  
  ngOnInit(): void {
    this.loadUsers();
  }

  // Método para cargar los usuarios con paginación
  loadUsers(): void {
    const offset = (this.currentPage - 1) * this.pageSize;
    this.userService.getUsers(this.pageSize, offset).subscribe(data => {
      this.users = data.users;
      this.totalUsers = data.total;
    });
  }

  // Método para cambiar de página
  onPageChange(page: number): void {
    if (page > 0 && page <= this.totalPages()) {
      this.currentPage = page;
      this.loadUsers();
    }
  }

  // Calcular el número total de páginas
  totalPages(): number {
    return Math.ceil(this.totalUsers / this.pageSize);
  }

  // Abrir el modal de edición con los datos del usuario seleccionado
  openEditModal(user: any): void {
    this.currentUserId = user.id;
    this.editUserForm.patchValue({
      name: user.name,
      email: user.email,
      password: ''  // Mantener el campo vacío
    });
  
    const modalElement = document.getElementById('editUserModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  
  // Enviar el formulario de edición
  onSubmit(): void {
    if (this.editUserForm.valid && this.currentUserId !== null) {
      this.userService.updateUser(this.currentUserId, this.editUserForm.value).subscribe(() => {
        alert('Usuario actualizado correctamente');
        this.loadUsers();  // Recargar la lista de usuarios
        const modalElement = document.getElementById('editUserModal');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal?.hide();
        }
      });
    }
  }
  
  // Eliminar un usuario
  deleteUser(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.userService.deleteUser(id).subscribe(() => {
        alert('Usuario eliminado');
        this.loadUsers();  // Recargar la lista de usuarios después de eliminar
      });
    }
  }

  // Buscar un usuario por ID
  searchUserById(): void {
    if (this.filterId) {
      const id = parseInt(this.filterId, 10);
      this.userService.getUserById(id).pipe(
        tap(user => {
          if (user) {
            this.users = [user];  // Mostrar solo el usuario encontrado
            this.totalUsers = 1;  // Actualizamos la cantidad total
          } else {
            this.users = [];  // Vaciar la grilla
            this.totalUsers = 0;
            alert('El usuario no existe');
          }
        }),
        catchError(error => {
          this.users = [];  // Vaciar la grilla si hay un error
          this.totalUsers = 0;
          alert('El usuario no existe');
          return of(null);  // Retorna un observable vacío para evitar errores
        })
      ).subscribe();
    }
  }

  // Eliminar el filtro y volver a la lista completa
  clearFilter(): void {
    this.filterId = '';
    this.loadUsers();  // Volver a cargar la lista completa de usuarios
  }
}
