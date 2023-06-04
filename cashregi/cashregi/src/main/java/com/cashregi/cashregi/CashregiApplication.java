package com.cashregi.cashregi;

import com.cashregi.cashregi.entity.Product;
import com.cashregi.cashregi.entity.Receipt;
import com.cashregi.cashregi.repository.ProductReceiptRepository;
import com.cashregi.cashregi.repository.ProductRepository;
import com.cashregi.cashregi.repository.ReceiptRepository;
import com.cashregi.cashregi.repository.UserRepository;
import com.cashregi.cashregi.service.ReceiptService;
import com.cashregi.cashregi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@SpringBootApplication
public class CashregiApplication {
	public static void main(String[] args) {
		SpringApplication.run(CashregiApplication.class, args);
	}

}
