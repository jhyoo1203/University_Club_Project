package com.club.backend.dto.club;

import lombok.*;

import java.util.List;

@Getter
@Setter
public class ModalDTO {
    private String modalTitle;
    private String modalContents;
    private List<String> modalImage;
}