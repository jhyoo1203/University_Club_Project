// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.dto.club;

import lombok.Data;

import java.util.List;

@Data
public class ClubDTO {
    // Club
    private int clubId; // 동아리 아이디
    private String clubName; // 동아리 이름

    // Property
    private List<String> tags; // 태그
    private String imageUrl; // 이미지 Url
    private String iconUrl; // 아이콘 Url

}
