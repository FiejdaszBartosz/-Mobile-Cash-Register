package com.cashregi.cashregi.service;

import com.cashregi.cashregi.Controller.LoginRequest;
import com.cashregi.cashregi.Controller.RegisterRequest;
import com.cashregi.cashregi.entity.Receipt;
import com.cashregi.cashregi.entity.User;
import com.cashregi.cashregi.repository.ReceiptRepository;
import com.cashregi.cashregi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;


@Service
public class UserService {

    private UserRepository userRepository;
    private ReceiptRepository receiptRepository;
    @Autowired
    public UserService(UserRepository userRepository, ReceiptRepository receiptRepository) {
        this.userRepository = userRepository;
        this.receiptRepository = receiptRepository;
    }

    public User login(LoginRequest request){
        return userRepository.getUserByEmailAndPassword(request.getEmail(), request.getPassword()).orElse(null);
    }

    public void register(RegisterRequest request){
        User user = new User(request.getEmail(), request.getPassword(), request.getFirstName(), request.getLastName());
        userRepository.save(user);
    }

    public UUID addNewReceipt(UUID user_id){
        User user = userRepository.getUserByEmail(user_id).orElse(null);
        LocalDateTime currentDateTime = LocalDateTime.now();

        Receipt receipt = new Receipt(user, currentDateTime, null, 0.0);
        receiptRepository.save(receipt);

        return receipt.getId();
    }

    public List<Receipt> allUsersReceipts(UUID user_id){
        User user = userRepository.getUserByEmail(user_id).orElse(null);
        return user.getReceipts();
    }
}
