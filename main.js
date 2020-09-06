
let datanew = [
    {
        img: "./img/congphuong.jpg",
        title: "Công Phượng kiến tạo cho ngôi sao Costa Rica 18 tỷ đồng lập công",
        link: "https://www.24h.com.vn/bong-da/cong-phuong-kien-tao-cho-ngoi-sao-costa-rica-18-ty-dong-lap-cong-c48a1178029.html"

    },
    {
        img: "./img/n1.jpg",
        title: "Fan Liverpool chê bai 'tội đồ' Neco Williams, tâng bốc Minamino",
        link :"https://doanhnghiepvn.vn/the-thao/fan-liverpool-che-bai-toi-do-neco-williams-tang-boc-minamino/20200830021527989"   


        
    },
    {
        img: "./img/n2.jpg" ,
        title: "Braithwaite muốn áo số 10 của Messi ở Barca",
        link:"  https://doanhnghiepvn.vn/the-thao/braithwaite-muon-ao-so-10-cua-messi-o-barca/20200830021048772"

        
    },
    {
        img:"./img/n3.jpg",
        title:"MINAMINO TRƯỚC CƠ HỘI TẠI LIVERPOOL",
        link:"https://zingnews.vn/minamino-truoc-co-hoi-tai-liverpool-post1125846.html"     
    },
    {
        img:"./img/n4.jpg",
        title:" NEYMAR - NGUỒN GỐC KHIẾN MESSI VÀ BARCA CHIA RẼ",
        link:"https://zingnews.vn/neymar-nguon-goc-khien-messi-va-barca-chia-re-post1125826.html"
    },
    {
        img:"./img/n5.jpg",  
        title:"Arsenal giành Siêu Cúp Anh: Niềm tin của Arteta",
        link:"https://vietnamnet.vn/vn/the-thao/bong-da-quoc-te/bong-da-anh/arsenal-gianh-sieu-cup-anh-niem-tin-mikel-arteta-670354.html"

     },
     {
         img:"./img/n6.jpg",
         title:"Lionel Messi hạ quyết tâm rời khỏi Barca từ hơn 1 tháng trước",
         link:"https://vov.vn/the-thao/bong-da/lionel-messi-ha-quyet-tam-roi-khoi-barca-tu-hon-1-thang-truoc-1089524.vov"
     },
     {
         img:"./img/n7.jpg",
         title:"Đâu rồi bóng dáng nhà vô địch Liverpool",
         link:"https://plo.vn/the-thao/quoc-te/dau-roi-bong-dang-nha-vo-dich-liverpool-935321.html"
     },
     {
         img:"./img/n8.jpg",
         title:"Juventus muốn kết hợp bộ đôi siêu sao Ronaldo và Messi",
         link:"https://nld.com.vn/the-thao/juventus-muon-ket-hop-bo-doi-sieu-sao-ronaldo-va-messi-20200829204826307.htm"
     }
]

let randomNumberDataNew = Math.floor(Math.random()*datanew.length)
let randomNumberDataNew1 = Math.floor(Math.random()*datanew.length)

datanewRandom = datanew[randomNumberDataNew]
datanewRandom1 = datanew[randomNumberDataNew1]

let newDom = document.getElementById("new-container")

newDom.innerHTML = `<div data-aos="fade-down" style="display: flex;justify-content: space-between; margin: 30px 0;">
<img style="width: 350px;height: 200px;"
    src="${datanewRandom.img}"
    alt="">
<div style="width: 45%">
    <h2 style="color:white">${datanewRandom.title}</h2>
    <form style="margin-left:50px" action="${datanewRandom.link}" method="GET"><button class="btn success">Xem chi
            tiết</button></form>
</div>
</div>


<div data-aos="fade-down" style="display: flex;justify-content: space-between; margin: 30px 0;">
<div style="width: 45%">
    <h2 style="color:white">${datanewRandom1.title}</h2>
    <form style="margin-left: 30px;" action="${datanewRandom1.link}" method="GET"><button class="btn success">Xem chi tiết</button></form>
</div>
<img style="width: 350px;height: 200px;"
    src="${datanewRandom1.img}"
    alt="">

</div>`

let dataFilm = [
    {
     video:"https://i.ytimg.com/vi/8wg3DEtiyDI/maxresdefault.jpg",
     title:"Tin Bóng Đá 24h Hôm Nay: Video Tổng Hợp Bàn Thắng Lượt Đi Tứ Kết Cup C1 2017",
     link: "https://www.youtube.com/watch?v=8wg3DEtiyDI&app=desktop"
    },
    {
        video:"https://i.ytimg.com/vi/5tF-hFaIA18/maxresdefault.jpg",
        title:"Tin Bóng Đá 24H Hôm Nay | Video Bàn Thắng, Kết Quả Bóng Đá | Cup C1 Châu Âu 2016 (Phần 1)",    
        link:"https://www.youtube.com/watch?v=5tF-hFaIA18"
    },
    {
        video:"https://i.ytimg.com/vi/ejGEFC8KX04/maxresdefault.jpg",
        title:"Những tình huống hài hước trong bóng đá",
        link:"https://www.youtube.com/watch?v=ejGEFC8KX04"
        
    },
    {
       video:"https://i.ytimg.com/vi/lMTUuqhRq3U/maxresdefault.jpg",
       title:"FULL | VIỆT NAM vs MALAYSIA | VÒNG LOẠI WORLD CUP 2022 | Next Sports",
       link:"https://www.youtube.com/watch?v=lMTUuqhRq3U&app=desktop"
    },
    {
        video:"https://i.ytimg.com/vi/Xb2LOdlXbpY/maxresdefault.jpg",
        title:"Nhìn lại một năm thăng hoa của bóng đá Việt Nam",
        link:"https://www.youtube.com/watch?v=Xb2LOdlXbpY"
    },
    {
        video:"https://i.ytimg.com/vi/xzVi2mdNei8/hqdefault.jpg",
        title:" Tin Bóng Đá 8/7 | Việt Nam có bao nhiêu phần trăm đi tiếp ở VL WC 2022; HLV Park chấm ai của U22 VN",
        link:"https://www.youtube.com/watch?v=0W1AueDWJm8"
    },
    {
        video:"https://i.ytimg.com/vi/WcDNCYzSA68/hqdefault.jpg",
        title:"Bóng Đá và Những Điều Luật Ít Người Biết: Luật Bóng Nổ, Luật Phản Lưới và Luật Penalty Có 1 0 2",
        link:"https://www.youtube.com/watch?v=WcDNCYzSA68"

    },
    {
        video:"https://i.ytimg.com/vi/Y64F6gMBCkg/hqdefault.jpg",
        title:"Tin Bóng Đá 8/7 | Việt Nam có bao nhiêu phần trăm đi tiếp ở VL WC 2022; HLV Park chấm ai của U22 VN?",
        link:"https://www.youtube.com/watch?v=0W1AueDWJm8"
 
    },

]
let randomNumberDataNew2 = Math.floor(Math.random()*dataFilm.length)
let randomNumberDataNew3 = Math.floor(Math.random()*dataFilm.length)

datanewRandom2 = dataFilm[randomNumberDataNew2]
datanewRandom3 = dataFilm[randomNumberDataNew3]

let newDom2 = document.getElementById("film-container")
newDom2.innerHTML = `<div data-aos="zoom-out" style="padding: 0 10%; ">

<div style="display: flex;justify-content: space-between; margin: 30px 0;">
    <img style="width: 350px;height: 200px; margin-left: -100px;"
        src="${datanewRandom2.video}"
        alt="">
    <div style="width: 45%;">
        <h2 style="color:white">${datanewRandom2.title}

        </h2>
        <form style="margin-left:50px" action="${datanewRandom2.link}" method="GET"><button class="btn success">Xem
                chi
                tiết</button></form>

    </div>

</div>
</div>

<div data-aos="fade-down" style="display: flex;justify-content: space-between; margin: 30px 0;">

<div style="width: 45%">


    <h2 style="color:white">${datanewRandom3.title}</h2>
    <form style="margin-left: 30px;" action="${datanewRandom3.link}" method="GET"><button class="btn success">Xem
            chi
            tiết</button></form>
</div>
<img style="width: 350px;height: 200px; margin-left: -185px; "
    src="${datanewRandom3.video}" alt="">
</div>`
