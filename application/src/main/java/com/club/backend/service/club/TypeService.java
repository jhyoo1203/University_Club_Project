package com.club.backend.service.club;

import com.club.backend.dto.club.ClubDTO;
import com.club.backend.entity.club.Club;
import com.club.backend.repository.club.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeService {
    @Autowired
    private TypeRepository typeRepository;

    @Autowired
    private ClubService clubService;
}
