package com.example.demo.service;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;


import java.util.List;

public interface UserService {
    User createUser(UserDto userDto);
    List<User> getAllUsers();
}
