package com.example.demo.services;

import java.util.ArrayList;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.example.demo.models.TaskModel;
import com.example.demo.repositories.TaskRepository;
import lombok.RequiredArgsConstructor;

// 2: Un controller llama a un servicio, este ejercuta la logica de negocio
@Service
@RequiredArgsConstructor // Al poner esto ya no es necesario el @Autowired, automáticamente lo inyecta en
                         // el servicio
public class TaskService {
    private final TaskRepository taskRepository;

    public Iterable<TaskModel> getAllTasks() {
        return (ArrayList<TaskModel>) taskRepository.findAll();
    }

    public TaskModel createTask(TaskModel task) {
        return taskRepository.save(task);
    }

    // como el metodo podria fallar si no existe el ID, se usa el metodo Optional
    public Optional<TaskModel> getTask(Long id) {
        return taskRepository.findById(id);
    }

    public ArrayList<TaskModel> getTaskPerStatus(Boolean status) {
        return taskRepository.findByStatus(status);
    }

    public boolean eliminarUsuario(Long id) {
        try {
            taskRepository.deleteById(id);
            return true;
        } catch (Exception err) {
            return false;
        }
    }

    public TaskModel updateTask(TaskModel task) {
        return taskRepository.save(task);

    }

    // truncate table
    public boolean cleanTableTask() {
        try {
            taskRepository.deleteAll();
            return true;
        } catch (Exception err) {
            return false;
        }

    }
}
