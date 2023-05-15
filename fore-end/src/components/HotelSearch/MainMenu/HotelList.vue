<template>
    <div class="hotel-list">
        <PropertyCard v-for="hotel in hotels" :key="hotel.hotel_name" :hotel="hotel" />
    </div>
</template>

<script>
import PropertyCard from './HotelItem/PropertyCard.vue';
export default {
    name: 'HotelList',
    components: {
        PropertyCard
    },
    data() {
        return {
            hotels: [
                {
                  hotel_name: "北京大酒店",
                  hotel_description: "北京大兴国际机场木棉花酒店坐落于北京，距离Temple of Heaven有46公里，配备健身中心、私人停车位、餐厅和酒吧。这家住宿距离前门大街约有48公里，距离大栅栏有49公里，距离王府井大街有49公里。这家酒店提供室内泳池、客房服务以及免费WiFi。",
                  hotel_city: "北京",
                  hotel_location: "昌平",
                  hotel_distance: 30,
                  hotel_score: 10,
                  hotel_star: 5,
                  hotel_image:'https://cf.bstatic.com/xdata/images/hotel/square600/292280419.webp?k=879f86776e037c46283a407918f09485e4578df79e161fd15156c50341c674ee&o='
                },
                {
                    hotel_name: "北京大酒店",
                  hotel_description: "北京大兴国际机场木棉花酒店坐落于北京，距离Temple of Heaven有46公里，配备健身中心、私人停车位、餐厅和酒吧。这家住宿距离前门大街约有48公里，距离大栅栏有49公里，距离王府井大街有49公里。这家酒店提供室内泳池、客房服务以及免费WiFi。",
                  hotel_city: "北京",
                  hotel_location: "昌平",
                  hotel_distance: 30,
                  hotel_score: 10,
                  hotel_star: 5,
                  hotel_image:'https://cf.bstatic.com/xdata/images/hotel/square600/292280419.webp?k=879f86776e037c46283a407918f09485e4578df79e161fd15156c50341c674ee&o='
                },
                {
                    hotel_name: "北京大酒店",
                  hotel_description: "北京大兴国际机场木棉花酒店坐落于北京，距离Temple of Heaven有46公里，配备健身中心、私人停车位、餐厅和酒吧。这家住宿距离前门大街约有48公里，距离大栅栏有49公里，距离王府井大街有49公里。这家酒店提供室内泳池、客房服务以及免费WiFi。",
                  hotel_city: "北京",
                  hotel_location: "昌平",
                  hotel_distance: 30,
                  hotel_score: 10,
                  hotel_star: 5,
                  hotel_image:'https://cf.bstatic.com/xdata/images/hotel/square600/292280419.webp?k=879f86776e037c46283a407918f09485e4578df79e161fd15156c50341c674ee&o='
                },
                {
                    hotel_name: "北京大酒店",
                  hotel_description: "北京大兴国际机场木棉花酒店坐落于北京，距离Temple of Heaven有46公里，配备健身中心、私人停车位、餐厅和酒吧。这家住宿距离前门大街约有48公里，距离大栅栏有49公里，距离王府井大街有49公里。这家酒店提供室内泳池、客房服务以及免费WiFi。",
                  hotel_city: "北京",
                  hotel_location: "昌平",
                  hotel_distance: 30,
                  hotel_score: 10,
                  hotel_star: 5,
                  hotel_image:'https://cf.bstatic.com/xdata/images/hotel/square600/292280419.webp?k=879f86776e037c46283a407918f09485e4578df79e161fd15156c50341c674ee&o='
                },
                {
                    hotel_name: "北京大酒店",
                  hotel_description: "北京大兴国际机场木棉花酒店坐落于北京，距离Temple of Heaven有46公里，配备健身中心、私人停车位、餐厅和酒吧。这家住宿距离前门大街约有48公里，距离大栅栏有49公里，距离王府井大街有49公里。这家酒店提供室内泳池、客房服务以及免费WiFi。",
                  hotel_city: "北京",
                  hotel_location: "昌平",
                  hotel_distance: 30,
                  hotel_score: 10,
                  hotel_star: 5,
                  hotel_image:'https://cf.bstatic.com/xdata/images/hotel/square600/292280419.webp?k=879f86776e037c46283a407918f09485e4578df79e161fd15156c50341c674ee&o='
                },
                {
                    hotel_name: "北京大酒店",
                  hotel_description: "北京大兴国际机场木棉花酒店坐落于北京，距离Temple of Heaven有46公里，配备健身中心、私人停车位、餐厅和酒吧。这家住宿距离前门大街约有48公里，距离大栅栏有49公里，距离王府井大街有49公里。这家酒店提供室内泳池、客房服务以及免费WiFi。",
                  hotel_city: "北京",
                  hotel_location: "昌平",
                  hotel_distance: 30,
                  hotel_score: 10,
                  hotel_star: 5,
                  hotel_image:'https://cf.bstatic.com/xdata/images/hotel/square600/292280419.webp?k=879f86776e037c46283a407918f09485e4578df79e161fd15156c50341c674ee&o='
                },
                {
                    hotel_name: "北京大酒店",
                  hotel_description: "北京大兴国际机场木棉花酒店坐落于北京，距离Temple of Heaven有46公里，配备健身中心、私人停车位、餐厅和酒吧。这家住宿距离前门大街约有48公里，距离大栅栏有49公里，距离王府井大街有49公里。这家酒店提供室内泳池、客房服务以及免费WiFi。",
                  hotel_city: "北京",
                  hotel_location: "昌平",
                  hotel_distance: 30,
                  hotel_score: 10,
                  hotel_star: 5,
                  hotel_image:'https://cf.bstatic.com/xdata/images/hotel/square600/292280419.webp?k=879f86776e037c46283a407918f09485e4578df79e161fd15156c50341c674ee&o='
                },
                {
                    hotel_name: "北京大酒店",
                  hotel_description: "北京大兴国际机场木棉花酒店坐落于北京，距离Temple of Heaven有46公里，配备健身中心、私人停车位、餐厅和酒吧。这家住宿距离前门大街约有48公里，距离大栅栏有49公里，距离王府井大街有49公里。这家酒店提供室内泳池、客房服务以及免费WiFi。",
                  hotel_city: "北京",
                  hotel_location: "昌平",
                  hotel_distance: 30,
                  hotel_score: 10,
                  hotel_star: 5,
                  hotel_image:'https://cf.bstatic.com/xdata/images/hotel/square600/292280419.webp?k=879f86776e037c46283a407918f09485e4578df79e161fd15156c50341c674ee&o='
                },
                {
                    hotel_name: "北京大酒店",
                  hotel_description: "北京大兴国际机场木棉花酒店坐落于北京，距离Temple of Heaven有46公里，配备健身中心、私人停车位、餐厅和酒吧。这家住宿距离前门大街约有48公里，距离大栅栏有49公里，距离王府井大街有49公里。这家酒店提供室内泳池、客房服务以及免费WiFi。",
                  hotel_city: "北京",
                  hotel_location: "昌平",
                  hotel_distance: 30,
                  hotel_score: 10,
                  hotel_star: 5,
                  hotel_image:'https://cf.bstatic.com/xdata/images/hotel/square600/292280419.webp?k=879f86776e037c46283a407918f09485e4578df79e161fd15156c50341c674ee&o='
                }
            ] 
        }
    },
    created() {
        // 在这里获取你的酒店数据
    }
}
</script>

<style>
.hotel-list {
    width: 80%;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
}
</style>
