package com.example.demo.Controller;


import com.example.demo.Dto.LoginDTO;
import com.example.demo.Dto.UserDTO;
import com.example.demo.Response.LoginResponse;
import com.example.demo.Service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")




public class UserController {

    @Autowired
    private IUserService iUserService;

    @PostMapping(path = "/save")
    public String saveUser (@RequestBody UserDTO userDTO)
    {
        String id = iUserService.addUser(userDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = iUserService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}
