package com.cashregi.cashregi.Controller;

import com.cashregi.cashregi.entity.User;
import com.cashregi.cashregi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody LoginRequest request
    ){
        User user = userService.login(request);
        if(user != null)
            return ResponseEntity.ok(user.getId());
        else
            return ResponseEntity.status(403).body("User not found");

    }

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(
            @RequestBody RegisterRequest request
    ){
        userService.register(request);
        return ResponseEntity.ok("User registered");
    }

    @PostMapping("/new/receipt")
    public ResponseEntity<?> addNewReceipt(@RequestBody String userId) {
        String cleanedUserId = userId.replaceAll("[\"/]", "");
        System.out.println(cleanedUserId);
        UUID userUUID = UUID.fromString(cleanedUserId);
        return ResponseEntity.ok(userService.addNewReceipt(userUUID));
    }
}
