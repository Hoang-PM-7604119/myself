---
title: Coral Reef Conservation Monitoring – Nha Trang
title_vi: Bảo tồn Rạn san hô – Vịnh Nha Trang
description: Underwater sensing stations, water-quality monitoring systems, and environmental data infrastructure for coral reef conservation in Nha Trang.
description_vi: Trạm quan trắc ngầm, hệ thống đo đạc chất lượng nước tự hành và hạ tầng dữ liệu phục vụ công tác bảo tồn rạn san hô tại Vịnh Nha Trang.
date: 2025-02-01
start: 2025-02
status: active
featured: true
order: 2
cover: /images/projects/coral-reef-conservation-nha-trang.jpg
topics: [aiot-environmental-monitoring]
people: [pham-huy-hieu, phung-manh-duong, dinh-van-dung, pham-minh-hoang, nguyen-ngoc-gia-ninh, nguyen-xuan-quyen]
publications: []
relatedProjects: [smart-marine-aquaculture, can-gio-mangrove-iot]
technologies: [Water Quality Sensing, Marine Telemetry, Underwater Imaging, Drone Remote Sensing, Linux, Docker, MQTT]
organizations: [
  "Smart Green Transformation Center (GREEN-X), VinUniversity",
  "Nha Trang Bay Management Board",
  "Nha Trang University (NTU)"
]
---

## <span data-i18n-en>The Conservation Challenge</span><span data-i18n-vi>Thách thức trong bảo tồn san hô</span>

<div data-i18n-en>

Coral reef ecosystems in Nha Trang Bay—one of Vietnam's most biologically diverse marine protected areas—face severe threats from rising sea temperatures, coastal runoff pollution, and fluctuating salinity levels. Traditional reef assessments rely on periodic manual scuba surveys, which cannot detect acute episodic shocks, dissolved oxygen drops, or fine-grained diurnal variations that trigger coral bleaching. 

The initiative is led by Principal Investigators (PI) **Dr. Pham Huy Hieu** and **Dr. Phung Manh Duong**, with **Dinh Van Dung** serving as Co-Principal Investigator (Co-PI). Field engineering, sensing station deployment, and data collection are executed by Technical Lead & Research Assistant **Minh-Hoang Pham** along with research assistants **Nguyen Ngoc Gia Ninh** and **Nguyen Xuan Quyen**.

To overcome these constraints, the project was formulated around two synergistic components:
1. **Deploying an autonomous offshore water-quality monitoring system** for 24/7 continuous environmental observation.
2. **Collecting high-resolution underwater coral imagery and drone datasets** to map benthic habitat health and build benchmark datasets for marine conservation.

</div>

<div data-i18n-vi>

Hệ sinh thái rạn san hô tại Vịnh Nha Trang — một trong những khu bảo tồn biển có tính đa dạng sinh học cao nhất Việt Nam — đang đứng trước nguy cơ suy thoái nghiêm trọng do nhiệt độ nước biển tăng cao, nước thải ven bờ và sự biến động độ mặn. Các phương pháp đánh giá rạn san hô truyền thống chủ yếu dựa vào các đợt lặn khảo sát thủ công định kỳ, vốn không thể phát hiện kịp thời các cú sốc môi trường đột ngột, hiện tượng tụt oxy hòa tan hay biến thiên nhiệt độ ngắn hạn dẫn đến hiện tượng san hô tẩy trắng.

Chương trình nghiên cứu được chủ trì bởi hai Chủ nhiệm đề tài (PI) là **TS. Phạm Huy Hiệu** và **TS. Phùng Mạnh Dương**, cùng Đồng chủ nhiệm đề tài (Co-PI) **Đinh Văn Dũng**. Công tác chế tạo thiết bị, lắp đặt trạm quan trắc thực địa và thu thập dữ liệu do Trưởng nhóm kỹ thuật kiêm Trợ lý nghiên cứu **Phạm Minh Hoàng** cùng các trợ lý nghiên cứu **Nguyễn Ngọc Gia Ninh** và **Nguyễn Xuân Quyền** thực hiện.

Để giải quyết thách thức này, dự án được triển khai với hai cấu phần trọng tâm:
1. **Triển khai hệ thống trạm quan trắc chất lượng nước tự hành ngoài khơi** nhằm giám sát môi trường liên tục 24/7.
2. **Thu thập tập dữ liệu hình ảnh san hô dưới nước độ phân giải cao kết hợp drone** để lập bản đồ sức khỏe sinh cảnh đáy biển và xây dựng bộ dữ liệu chuẩn phục vụ bảo tồn.

</div>

---

## <span data-i18n-en>Part 1: Autonomous Water Quality Monitoring System Deployment</span><span data-i18n-vi>Phần 1: Triển khai hệ thống trạm quan trắc chất lượng nước tự hành</span>

<div data-i18n-en>

The first core objective focuses on deploying an autonomous, ruggedized environmental telemetry station operating continuously within the Nha Trang Bay marine sanctuary:

- **Multiparameter In-Situ Water Quality Sensing:** Submerged sensing clusters continuously log critical water-chemistry variables directly at reef depths, including dissolved oxygen (DO), water temperature, pH, salinity, and turbidity.
- **Corrosion-Resistant Marine Hardware:** IP68-rated sealed telemetry housings, marine-grade cabling, and anti-biofouling enclosures engineered for long-term survival in high-salinity coastal environments.
- **Solar Energy Harvesting & Surface Telemetry:** Solar photovoltaic arrays mounted on marine navigation beacons ensure uninterrupted off-grid power, transmitting encrypted telemetry via cellular channels.
- **Continuous Environmental Sanctuary Intelligence:** Real-time data feeds allow marine scientists and park rangers to detect bleaching conditions, hypoxic dips, and runoff anomalies early.

</div>

<div data-i18n-vi>

Mục tiêu trọng tâm thứ nhất tập trung vào việc triển khai trạm viễn thông quan trắc môi trường tự hành, bền bỉ, vận hành liên tục tại khu bảo tồn biển Vịnh Nha Trang:

- **Đo đạc đa chỉ số chất lượng nước tại chỗ (In-Situ):** Chùm cảm biến ngầm liên tục ghi nhận các thông số hóa lý quan trọng tại tầng rạn san hô, bao gồm oxy hòa tan (DO), nhiệt độ nước, pH, độ mặn và độ đục.
- **Phần cứng chuẩn hàng hải chống ăn mòn:** Vỏ trạm viễn thông đạt chuẩn chống nước IP68, cáp chuyên dụng chịu môi trường biển và lớp phủ hạn chế sinh vật bám sinh học, đảm bảo hoạt động lâu dài trong môi trường nước biển mặn.
- **Thu hoạch năng lượng mặt trời & Viễn thông mặt biển:** Dàn pin mặt trời gắn trực tiếp trên trụ phao tiêu hàng hải cung cấp nguồn điện độc lập liên tục, truyền dữ liệu mã hóa về đất liền qua sóng di động.
- **Giám sát cảnh báo sớm cho khu bảo tồn:** Dữ liệu thời gian thực giúp các nhà khoa học biển và ban quản lý vịnh phát hiện sớm các ngưỡng nhiệt độ gây tẩy trắng, hiện tượng thiếu oxy cục bộ hoặc ô nhiễm từ đất liền.

</div>

### <span data-i18n-en>1. Project Kickoff & System Architecture Formulation</span><span data-i18n-vi>1. Khởi động dự án & Hoạch định kiến trúc hệ thống</span>

<div data-i18n-en>

The initiative began with a comprehensive technical workshop at VinUniversity, convening researchers across embedded sensing, marine IoT networking, and conservation robotics to define the offshore telemetry architecture.

</div>

<div data-i18n-vi>

Dự án khởi đầu bằng buổi làm việc kỹ thuật chuyên sâu tại VinUniversity, quy tụ các nhà nghiên cứu trong lĩnh vực cảm biến nhúng, mạng IoT trên biển và robot bảo tồn để thống nhất kiến trúc trạm đo ngoài khơi.

</div>

<figure>
  <img src="/myself/images/projects/coral-reef/kickstart-meeting.jpg" alt="Coral reef project kickoff and architecture workshop at VinUniversity" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 1:</strong> Project kickoff meeting at VinUniversity with Minh-Hoang Pham, Prof. Dinh Van Dung, Prof. Pham Huy Hieu, and faculty researchers formulating the coastal sensing architecture.</span>
    <span data-i18n-vi><strong>Hình 1:</strong> Buổi họp khởi động dự án tại VinUniversity cùng Phạm Minh Hoàng, PGS. Đinh Văn Dũng, TS. Phạm Huy Hiệu và nhóm nghiên cứu định hình kiến trúc quan trắc biển.</span>
  </figcaption>
</figure>

### <span data-i18n-en>2. Institutional Strategic Alignment with Nha Trang Bay Management Board</span><span data-i18n-vi>2. Làm việc & Thống nhất triển khai với Ban Quản lý Vịnh Nha Trang</span>

<div data-i18n-en>

Safeguarding coral reefs requires strict compliance with marine park regulations and close coordination with local authorities. The research delegation traveled to Khanh Hoa to collaborate directly with leadership and scientific officers of the **Nha Trang Bay Management Board** (*Ban Quản lý Vịnh Nha Trang*).

The discussions finalized operational protocols, designated safe deployment corridors within the marine reserve to prevent anchor damage to living coral heads, and established data-sharing agreements with conservation rangers.

</div>

<div data-i18n-vi>

Bảo tồn san hô đòi hỏi sự tuân thủ nghiêm ngặt quy chế phân vùng bảo vệ nghiêm ngặt và phối hợp chặt chẽ với cơ quan chức năng địa phương. Đoàn nghiên cứu đã trực tiếp tới Khánh Hòa làm việc với lãnh đạo và cán bộ chuyên môn của **Ban Quản lý Vịnh Nha Trang**.

Buổi làm việc đã thống nhất phương án triển khai, xác định vị trí thả thiết bị an toàn trong khu bảo tồn nhằm tránh gây tổn hại đến các rạn san hô sống, đồng thời thiết lập cơ chế chia sẻ luồng dữ liệu quan trắc phục vụ công tác tuần tra, bảo vệ.

</div>

<figure>
  <img src="/myself/images/projects/coral-reef/nha-trang-bay-management-meeting.jpg" alt="Meeting with Nha Trang Bay Management Board delegation" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 2:</strong> Research and leadership delegation outside the headquarters of the Nha Trang Bay Management Board (Ban Quản lý Vịnh Nha Trang) following strategic deployment planning.</span>
    <span data-i18n-vi><strong>Hình 2:</strong> Đoàn nghiên cứu làm việc trước trụ sở Ban Quản lý Vịnh Nha Trang sau buổi thống nhất kế hoạch triển khai trạm quan trắc.</span>
  </figcaption>
</figure>

### <span data-i18n-en>3. Offshore Marine Transit & Buoy Station Commissioning</span><span data-i18n-vi>3. Di chuyển ra biển & Lắp đặt trạm quan trắc trên phao tiêu</span>

<div data-i18n-en>

The operational phase transitioned to the open waters of Nha Trang Bay. Navigating by research workboat to designated sanctuary coordinates, researchers and divers transported telemetry equipment, subsea cabling, and underwater inspection ROVs.

The autonomous monitoring station was mounted onto a marine navigational beacon. Solar photovoltaic panels and sealed telemetry enclosures were affixed above the splash zone, while certified scuba divers descended into the reef to anchor the multiparameter water quality sensor payload along the seabed—initiating continuous round-the-clock environmental data collection.

</div>

<div data-i18n-vi>

Giai đoạn thực địa được triển khai trực tiếp trên vùng nước vịnh Nha Trang. Nhóm nghiên cứu cùng các thợ lặn chuyên nghiệp di chuyển bằng thuyền công tác tới tọa độ đã được cấp phép, mang theo thiết bị viễn thông, cáp ngầm chuyên dụng và robot khảo sát ROV.

Trạm quan trắc tự hành được gắn chắc chắn lên trụ phao tiêu phân luồng hàng hải. Tấm pin năng lượng mặt trời và tủ trạm chống nước được bố trí trên cao để tránh sóng vỗ, trong khi các thợ lặn lặn xuống độ sâu rạn san hô để cố định cụm cảm biến đo đa chỉ số chất lượng nước dưới đáy biển — chính thức kích hoạt chu trình thu thập dữ liệu tự động 24/7.

</div>

<div class="figure-grid">
  <figure>
    <img src="/myself/images/projects/coral-reef/ocean-deployment-transit.jpg" alt="Marine transit and ROV staging on research boat in Nha Trang Bay" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 3:</strong> Research team navigating Nha Trang Bay aboard an expedition vessel, staging underwater ROVs, cabling, and calibration tools for sanctuary installation.</span>
      <span data-i18n-vi><strong>Hình 3:</strong> Tàu nghiên cứu di chuyển trên Vịnh Nha Trang mang theo thiết bị ROV, dây cáp cảm biến ngầm và dụng cụ hiệu chuẩn.</span>
    </figcaption>
  </figure>
  <figure>
    <img src="/myself/images/projects/coral-reef/marine-buoy-monitoring-station.jpg" alt="Deployed solar telemetry station on marine beacon with diver" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 4:</strong> Commissioned solar-powered monitoring station installed atop a marine navigational beacon in Nha Trang Bay, with diver securing submerged sensor nodes in the coral reef zone.</span>
      <span data-i18n-vi><strong>Hình 4:</strong> Trạm giám sát năng lượng mặt trời hoàn thiện trên phao tiêu hàng hải Vịnh Nha Trang, thợ lặn cố định chùm cảm biến đáy san hô.</span>
    </figcaption>
  </figure>
</div>

---

## <span data-i18n-en>Part 2: Underwater Coral Image & Video Dataset Collection</span><span data-i18n-vi>Phần 2: Thu thập tập dữ liệu hình ảnh & video san hô dưới biển</span>

<div data-i18n-en>

The second core objective focuses on building comprehensive visual benchmark datasets of living coral ecosystems across diverse microhabitats in Nha Trang Bay. 

By pairing high-altitude aerial drone surveys with underwater optical transects, the research team acquires multi-angle, multi-scale visual data:

- **Benthic Coral Optical Surveys:** Submerged camera systems and scuba inspection sweeps record high-definition video and photography of branching, massive, and encrusting coral colonies. The dataset documents coral bleaching severity, algal overgrowth, and macro-invertebrate diversity.
- **Aerial Drone Photogrammetry:** Low-altitude drone flights map shallow reef flats, water surface clarity, wave dynamics, and tidal currents across the survey coordinates.
- **Multimodal Alignment:** Benthic optical frames and drone canopy footage are georeferenced with concurrent water quality telemetry (temperature, dissolved oxygen, turbidity) to enable data-driven ecological modeling and automated coral assessment algorithms.

</div>

<div data-i18n-vi>

Mục tiêu trọng tâm thứ hai tập trung vào việc thu thập và xây dựng tập dữ liệu thị giác chuẩn quy mô lớn về các hệ sinh thái rạn san hô sống tại Vịnh Nha Trang.

Bằng cách kết hợp các chuyến bay khảo sát bằng flycam trên cao cùng các đường lặn chụp ảnh quang học dưới nước, nhóm nghiên cứu đã thu nhận dữ liệu đa góc nhìn, đa tỷ lệ:

- **Khảo sát quang học đáy rạn (Benthic Surveys):** Camera chuyên dụng dưới nước và các lượt lặn khảo sát ghi lại hình ảnh, video độ nét cao về các tập đoàn san hô cành, san hô khối và san hô bàn. Dữ liệu ghi nhận mức độ tẩy trắng, sự xâm lấn của rong tảo và các loài sinh vật biển đi kèm.
- **Viễn thám bằng máy bay không người lái (Drone):** Các đường bay tầm thấp ghi nhận toàn cảnh bề mặt rạn san hô nông, độ trong suốt của nước, biến động sóng và dòng triều tại khu vực nghiên cứu.
- **Đồng bộ dữ liệu đa phương thức:** Dữ liệu hình ảnh dưới đáy và video flycam trên cao được gắn tọa độ GPS chuẩn xác cùng với chuỗi số liệu chất lượng nước (nhiệt độ, DO, độ đục) đo được đồng thời, mở đường cho việc xây dựng mô hình AI nhận diện và đánh giá tự động rạn san hô.

</div>

<figure>
  <img src="/myself/images/projects/coral-reef/usingdrone-to-collect-data.jpg" alt="Aerial drone view of research boat conducting coral reef data collection" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 5:</strong> Aerial drone survey of the expedition vessel conducting data acquisition over shallow coral reef beds in Nha Trang Bay, with submerged sensor cables deployed into the water column.</span>
    <span data-i18n-vi><strong>Hình 5:</strong> Khảo sát bằng drone từ trên không ghi nhận tàu nghiên cứu thu thập dữ liệu trên rạn san hô nông Vịnh Nha Trang với đường cáp cảm biến thả ngầm.</span>
  </figcaption>
</figure>

<figure>
  <video controls playsinline preload="metadata" poster="/myself/images/projects/coral-reef/data-collecting-poster.jpg">
    <source src="/myself/videos/projects/coral-reef/data-collecting.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <figcaption>
    <span data-i18n-en><strong>Video 1: Marine Data Collection & Drone Survey</strong> — Aerial footage tracking the expedition boat and underwater sensor deployment across the Nha Trang Bay coral reef conservation zone.</span>
    <span data-i18n-vi><strong>Video 1: Thu thập dữ liệu thực địa & Khảo sát drone</strong> — Video flycam theo dõi hoạt động thu thập dữ liệu môi trường và thả đầu dò ngầm trên khu bảo tồn san hô Vịnh Nha Trang.</span>
  </figcaption>
</figure>

## <span data-i18n-en>Impact & Environmental Value</span><span data-i18n-vi>Tác động & Ý nghĩa bảo tồn môi trường</span>

<div data-i18n-en>

- **Real-Time Sanctuary Vigilance:** Replaced infrequent manual dive surveys with continuous 24/7 water chemistry logging across critical coral zones.
- **Institutional Integration:** Direct collaboration with the Nha Trang Bay Management Board ensures telemetry directly informs conservation actions and bleaching prevention.
- **Ruggedized Coastal IoT:** Validated durable solar-powered telemetry nodes engineered for high-salinity tropical marine conditions.

</div>

<div data-i18n-vi>

- **Giám sát khu bảo tồn thời gian thực:** Thay thế các đợt lặn thủ công gián đoạn bằng hệ sinh thái quan trắc hóa lý liên tục 24/7 ngay tại vùng lõi rạn san hô.
- **Gắn kết mật thiết với cơ quan quản lý:** Phối hợp chặt chẽ với Ban Quản lý Vịnh Nha Trang giúp luồng dữ liệu quan trắc phục vụ trực tiếp công tác cứu hộ, bảo tồn và ứng phó sự cố môi trường biển.
- **Phần cứng IoT biển bền bỉ:** Khẳng định độ tin cậy của các nút cảm biến tự hành dùng năng lượng mặt trời trong điều kiện môi trường biển nhiệt đới độ mặn cao.

</div>
