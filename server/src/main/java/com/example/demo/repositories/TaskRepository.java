package com.example.demo.repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.TaskModel;

// 3: Este hace las conexiones reales con la base de datos
// Ya no es necesario poner @Repository
// @Repository // indicamos que va ser de tipo repository
// CrudRepository es una interface que implementa todos los metodos de la base
// de datos, estos metodos ya están programados
// public interface TaskRepository extends CrudRepository<TaskModel, Long> {
//     public abstract ArrayList<TaskModel> findByStatus(Boolean status);
// }

@Repository
public interface TaskRepository extends JpaRepository<TaskModel, Long> {
    public abstract ArrayList<TaskModel> findByStatus(Boolean status);
}
