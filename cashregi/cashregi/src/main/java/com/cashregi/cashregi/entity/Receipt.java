package com.cashregi.cashregi.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;


@Entity(name = "Receipt")
@Table(
        name = "receipt"
)
public class Receipt {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(
            name = "id"
    )
    private UUID id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "user_id",
            nullable = false,
            updatable = false,
            referencedColumnName = "id",
            foreignKey = @ForeignKey(
                    name = "user_receipt_fk"
            )
    )
    private User user;


    @Column(
            name = "start_time",
            nullable = false,
            updatable = false,
            columnDefinition = "TIMESTAMP WITHOUT TIME ZONE"
    )
    private LocalDateTime startTime;

    @Column(
            name = "end_time",
            columnDefinition = "TIMESTAMP WITHOUT TIME ZONE"
    )
    private LocalDateTime endTime;

    @Column(
            name = "total"
    )
    private Double total;

    @JsonIgnore
    @OneToMany(mappedBy = "receipt", cascade = CascadeType.REMOVE)
    private List<ProductReceipt> productReceipts;

    public Receipt(){};

    public Receipt(User user, LocalDateTime startTime, LocalDateTime endTime, Double total) {
        this.user = user;
        this.startTime = startTime;
        this.endTime = endTime;
        this.total = total;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }
}
