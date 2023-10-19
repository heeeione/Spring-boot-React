package com.example.demo.entity;

import com.example.demo.dto.UserDto;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "name", nullable = false)
    private String name;

    public User(UserDto userDto) {
        email = userDto.getEmail();
        password = userDto.getPassword();
        name = userDto.getName();
    }
}
