import React, { useState, useEffect, useMemo } from "react";
import apiClient from 'api';
import Loader from 'component/Recycle/loader.js';

import Club from "./club";

function Booth({ category, groupedEvents }) {
    const [selectedClubCategory, setSelectedClubCategory] = useState("전체");
    const [clubsData, setClubsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [clubCategories, setClubCategories] = useState(["전체", "공연", "취미", "종교", "기타"]);
    const clubCategoryMapping = useMemo(() => ({
        "전체": "all",
        "공연": "1",
        "취미": "3",
        "종교": "4",
        "기타": "5"
    }), []);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const category = clubCategoryMapping[selectedClubCategory] || selectedClubCategory;
            try {
                const response = await apiClient.get(`/clubs/${category}`);
                setClubsData(response.data);
            } catch (error) {
                console.error("네트워크 오류 [Booth]", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [selectedClubCategory, clubCategoryMapping]);

    // Day2 [부스] 선택 시 공연 카테고리 제거
    useEffect(() => {
        if (category === "2024-04-02") {
            setClubCategories(prevCategories => prevCategories.filter(cat => cat !== "공연"));
        } else if (category === "2024-04-01") {
            setClubCategories(prevCategories => {
                if (!prevCategories.includes("공연")) {
                    let newCategories = [...prevCategories];
                    newCategories.splice(1, 0, "공연");
                    return newCategories;
                }
                return prevCategories;
            });
        }
    }, [category]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <div className="flex justify-center space-x-1.5 mb-1">
                {clubCategories.map((category) => (
                    <div
                        key={category}
                        className={`relative text-center cursor-pointer px-3 py-2 ${
                            selectedClubCategory === category ? "font-bold text-lg" : "text-lg text-gray-500"
                            }`}
                        onClick={() => (setSelectedClubCategory(category))}
                    >
                        {category}
                        <div
                            className={`absolute bottom-0 left-0 right-0 h-1 mx-auto w-full ${
                                selectedClubCategory === category ? "bg-black" : "bg-transparent"
                                }`}
                            style={{ marginBottom: "-1px" }}
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-between border rounded-lg mx-5 my-3 px-5 shadow-lg min-w-64 max-w-[500px] min-h-20">
                    <div className="mx-3 my-5">
                        <div className="bg-slate-200 p-3 rounded-md">
                            <div className="flex justify-center">
                                <div className={`rounded-full bg-green-500 w-3 h-3 mt-1 mr-1 mb-2`}>
                                </div>
                                <p className="text-sm font-bold mr-2">: 운영중</p>
                                <div className={`rounded-full bg-gray-500 w-3 h-3 mt-1 mr-1 mb-2`}>
                                </div>
                                <p className="text-sm font-bold mr-2">: 종료</p>
                                <div className={`rounded-full bg-orange-500 w-3 h-3 mt-1 mr-1 mb-2`}>
                                </div>
                                <p className="text-sm font-bold">: 조기마감</p>
                            </div>
                            <div className="flex justify-center">
                                <div className={`rounded-full bg-yellow-300 w-3 h-3 mt-1 mr-1 mb-2`}>
                                </div>
                                <p className="text-sm font-bold mr-2">: 일시중지</p>
                                <div className={`rounded-full bg-red-500 w-3 h-3 mt-1 mr-1 mb-2`}>
                                </div>
                                <p className="text-sm font-bold">: 혼잡</p>
                            </div>
                        </div>
                        {groupedEvents.map((events, index) => (
                            <div key={index}>
                                {events
                                    .filter(
                                        (schedule) =>
                                            schedule.eventTime &&
                                            schedule.eventTime.startsWith(
                                                category
                                            )
                                    )
                                    .map((schedule, index) => (
                                        <Club
                                            key={index}
                                            schedule={schedule}
                                            category={clubCategoryMapping[selectedClubCategory] || selectedClubCategory}
                                            clubsData={clubsData}
                                        />
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booth;
