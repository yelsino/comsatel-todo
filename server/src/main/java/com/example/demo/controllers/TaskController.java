package com.example.demo.controllers;

import java.util.ArrayList;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.models.TaskModel;
import com.example.demo.services.TaskService;

import lombok.RequiredArgsConstructor;

// 1: aqui se reciben las peticiones web

@RestController // indicamos que es un controlador REST
@RequestMapping("tasks") // indicamos la ruta de la API
@CrossOrigin(origins = "*", allowedHeaders = "*") // permitimos que cualquier origen pueda acceder a la API
@RequiredArgsConstructor
public class TaskController {

    // private @Autowired TaskService taskService;// indicamos que se instancia
    // automaticamente por spring
    private final TaskService taskService;// indicamos que se instancia automaticamente por spring

    // cuando llegue una peticion GET a la ruta /usuario
    public @GetMapping Iterable<TaskModel> getAllTasks() {
        return taskService.getAllTasks();
    }

    // Notacion RequestBody para que spring pueda leer el body de la peticion
    public @PostMapping TaskModel createTask(@RequestBody TaskModel task) {
        return this.taskService.createTask(task);
    }

    @GetMapping("{id}")
    public TaskModel getTask(@PathVariable("id") Long id) {
        return this.taskService.getTask(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe la tarea"));
    }

    @GetMapping("query")
    public ArrayList<TaskModel> getTaskPerStatus(Boolean status) {
        return this.taskService.getTaskPerStatus(status);
    }

    @DeleteMapping("{id}")
    public String eliminarUsuario(@PathVariable("id") Long id) {
        boolean isOk = this.taskService.eliminarUsuario(id);
        return isOk ? "Se elimino correctamente" : "No se pudo eliminar";
    }

    // update task
    @PutMapping("{id}")
    public TaskModel updateTask(@RequestBody TaskModel task) {
        return this.taskService.updateTask(task);
    }

    @DeleteMapping("clean")
    public String cleanTableTask() {
        boolean isOk = this.taskService.cleanTableTask();
        return isOk ? "Se limpio la tabla task" : "No se pudo limpiar la tabla task";
    }
}
