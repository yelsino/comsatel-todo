package com.example.demo.models;

import java.util.Date;
import javax.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
// import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import lombok.Data;

// 4: El repositorio a su vez hace uso de los modelos para saber que tabla y tipo de datos usar
// @EntityListeners(AuditingEntityListener.class)
@Entity // Etiqueta Entity - indicamos que es un modelo real
@Table(name = "task") // Notación Table - indica el nombre de la tabla en la base de datos
@Data
public class TaskModel {

    // anotaciones de tabla ID, GeneratedValue, y Column
    @Id // indicamos que es el id de la tabla
    @GeneratedValue(strategy = GenerationType.IDENTITY) // indicamos que se autoincrementa
    // @Column(unique = true, nullable = false) // indicamos que no es nulo y que es unico
    private Long id; // Long para definir un numero muy grande

    private String name;

    private Boolean status;

    @CreationTimestamp
    // @Column(name = "created_at", nullable = false, updatable = false)
    private Date createdAt;

    @UpdateTimestamp
    // @Column(name = "updated_at")
    private Date updatedAt;

}
