package com.club.backend.controller;

import com.club.backend.dto.club.PropertyDTO;
import com.club.backend.service.club.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @PatchMapping("/property/likes")
    public PropertyDTO patchLikes(@RequestBody PropertyDTO dto) {
        return dto;
    }
}