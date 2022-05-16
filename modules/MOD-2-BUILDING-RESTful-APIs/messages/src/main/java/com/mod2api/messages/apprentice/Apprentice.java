package com.mod2api.messages.apprentice;

import javax.persistence.*;

@Entity
@Table
public class Apprentice {
    @Id
    @SequenceGenerator(
            name= "apprentice_sequence",
            sequenceName = "apprentice_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "apprentice_sequence"
    )
    private Long id;
    private String name;

    public Apprentice(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Apprentice(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Apprentice{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
