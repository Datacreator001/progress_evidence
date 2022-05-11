package com.pluralsight.mod2api.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Setter;
import  lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import javax.persistence.*;

@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Apprentices")
public class ApprenticeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonProperty("Name")
    private String Name;
}
