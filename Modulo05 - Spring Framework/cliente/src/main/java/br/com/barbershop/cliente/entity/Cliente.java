package br.com.barbershop.cliente.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data   //Getters and Setters e ToString
@AllArgsConstructor //Construtor com propriedades de Clientes
@NoArgsConstructor //Construtor vazio
@Builder //Criação de Objetos Clientes
@Entity //Entidade

public class Cliente implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "email")
    private String email;

    @Column(name="cpf")
    private String cpf;

}
