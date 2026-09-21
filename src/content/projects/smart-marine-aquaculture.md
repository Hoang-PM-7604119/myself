---
title: Smart Marine Aquaculture – Nha Trang
title_vi: Nuôi biển thông minh – Nha Trang
description: Field-deployable embedded systems, servers, underwater imaging, bioacoustics, and water-quality sensing infrastructure for smart marine aquaculture in Nha Trang.
description_vi: Hệ thống nhúng thực địa, máy chủ, thị giác dưới nước, âm thanh sinh học và hạ tầng quan trắc 5 chỉ số chất lượng nước phục vụ nuôi biển thông minh tại Nha Trang.
date: 2025-02-01
start: 2025-02
status: active
featured: true
order: 1
cover: /images/projects/smart-marine-aquaculture.jpg
topics: [aiot-environmental-monitoring]
people: [nguyen-van-dinh, do-danh-cuong, dinh-van-dung, pham-minh-hoang, phan-tuan-khoi, nguyen-thanh-trung, nguyen-hong-phuc, trinh-cong-son, nguyen-xuan-quyen]
publications: [clean-cam]
relatedProjects: [coral-reef-conservation-nha-trang, can-gio-mangrove-iot]
technologies: [Python, PyTorch, Computer Vision, ESP32, MQTT, PostgreSQL, MinIO, Docker]
organizations: [
  "Smart Green Transformation Center (GREEN-X), VinUniversity",
  "Vietnam National University of Agriculture (VNUA)",
  "Research Institute for Aquaculture (RIA)"
]
---

## <span data-i18n-en>The Field Challenge</span><span data-i18n-vi>Thách thức từ thực địa</span>

<div data-i18n-en>

Smart marine aquaculture in coastal waters near Nha Trang presents harsh environmental constraints that disrupt traditional manual monitoring. High water turbidity, rapid biofouling on optical viewports, corrosive saline conditions, and remote offshore power constraints severely challenge standard equipment. Sustainable offshore farming requires continuous, automated insight into water chemistry, underwater acoustics, and fish behavior without manual diving.

The project is directed under the academic leadership of Principal Investigators (PI) **Dr. Van-Dinh Nguyen** and **Dr. Do Danh Cuong**, with **Dinh Van Dung** serving as Co-Principal Investigator (Co-PI). Engineering execution, telemetry, and field deployment operations are driven by Technical Lead & Research Assistant **Minh-Hoang Pham** alongside research assistants **Phan Tuan Khoi**, **Nguyen Thanh Trung**, **Nguyen Hong Phuc**, **Trinh Cong Son**, and **Nguyen Xuan Quyen**.

</div>

<div data-i18n-vi>

Nuôi trồng thủy sản biển tại vùng duyên hải Nha Trang đặt ra nhiều thách thức khắc nghiệt khiến các phương pháp giám sát thủ công truyền thống không còn đáp ứng được. Độ đục cao của nước, hiện tượng sinh vật bám (biofouling) nhanh chóng lên ống kính quang học, môi trường nước mặn ăn mòn mạnh cùng nguồn điện ngoài khơi hạn chế tạo áp lực lớn lên các thiết bị phần cứng tiêu chuẩn. Để phát triển nuôi biển bền vững, cần có giải pháp tự động hóa liên tục nhằm thu thập dữ liệu hóa lý nước, âm thanh dưới nước và hành vi đàn cá mà không cần thợ lặn trực tiếp.

Dự án được dẫn dắt bởi hai Chủ nhiệm đề tài (PI) là **TS. Nguyễn Văn Định** và **TS. Đỗ Danh Cường**, cùng Đồng chủ nhiệm đề tài (Co-PI) **Đinh Văn Dũng**. Công tác phát triển kỹ thuật, viễn thông và triển khai thực địa do Trưởng nhóm kỹ thuật kiêm Trợ lý nghiên cứu **Phạm Minh Hoàng** cùng các trợ lý nghiên cứu **Phan Tuấn Khôi**, **Nguyễn Thành Trung**, **Nguyễn Hồng Phúc**, **Trịnh Công Sơn** và **Nguyễn Xuân Quyền** đảm nhiệm.

</div>

## <span data-i18n-en>Embedded System Architecture: 3 Sensing Modalities & Integrated AI</span><span data-i18n-vi>Kiến trúc hệ thống nhúng: 3 phương thức cảm biến & Tích hợp AI</span>

<div data-i18n-en>

To provide continuous, end-to-end monitoring for offshore aquaculture operations, the research team engineered an integrated embedded hardware platform combining three primary sensing modalities coupled with edge AI algorithms:

- **1. Underwater Video Sensing (Computer Vision):** Waterproof submerged camera rigs capture high-resolution imagery and video streams under challenging underwater illumination. Embedded vision models continuously observe fish biomass, school clustering, swimming trajectories, and evaluate optical viewport biofouling in real time.
- **2. Underwater Audio Sensing (Bioacoustics):** Subsea hydrophone arrays capture underwater soundscapes and frequency dynamics. Bioacoustic AI models analyze fish chewing, pellet collision, and swimming acoustic signatures to quantify feeding intensity and appetite in real time.
- **3. Five Key Water-Quality Parameters:** An industrial-grade sensor manifold continuously monitors 5 critical physicochemical indicators: **Dissolved Oxygen (DO)**, **pH**, **Water Temperature**, **Salinity**, and **Turbidity**, safeguarding against sudden hypoxia, temperature shocks, or salinity shifts.
- **Applied Artificial Intelligence (AI):** Edge AI models (PyTorch, YOLO) and signal processing algorithms analyze video and acoustic streams on-site, converting raw high-bandwidth sensor feeds into actionable operational insights, feeding schedule optimizations, and early disease/stress warnings.
- **Robust Telemetry & Server Infrastructure:** Encrypted MQTT pipelines stream metadata and filtered frames to edge servers, backed by PostgreSQL time-series storage, MinIO media buckets, and live operational dashboards.

</div>

<div data-i18n-vi>

Nhằm cung cấp giải pháp giám sát toàn diện, liên tục cho các cơ sở nuôi biển, nhóm nghiên cứu đã thiết kế nền tảng phần cứng nhúng tích hợp kết hợp 3 phương thức cảm biến chủ đạo cùng các thuật toán trí tuệ nhân tạo (AI):

- **1. Cảm biến hình ảnh dưới nước (Thị giác máy tính):** Hệ thống camera ngầm chống nước ghi lại luồng hình ảnh và video độ phân giải cao trong điều kiện ánh sáng dưới nước phức tạp. Các mô hình thị giác nhúng quan sát liên tục sinh khối cá, mật độ đàn, quỹ đạo bơi và tự động đánh giá mức độ bám bẩn sinh học trên kính quan sát theo thời gian thực.
- **2. Cảm biến âm thanh dưới nước (Thủy âm sinh học):** Đầu thu sóng âm ngầm (hydrophone) thu nhận trường âm thanh và dao động tần số dưới nước. Mô hình AI phân tích tín hiệu âm thanh đớp mồi, va chạm thức ăn viên và âm thanh chuyển động để định lượng mức độ thèm ăn và phản xạ ăn của đàn cá theo thời gian thực.
- **3. Đo đạc 5 chỉ số chất lượng nước quan trọng:** Cụm đầu dò chuẩn công nghiệp liên tục đo đạc 5 thông số hóa lý thiết yếu: **Oxy hòa tan (DO)**, **pH**, **Nhiệt độ nước**, **Độ mặn** và **Độ đục**, giúp cảnh báo sớm nguy cơ thiếu oxy cục bộ hoặc sốc môi trường.
- **Ứng dụng Trí tuệ Nhân tạo (AI):** Các mô hình AI biên (PyTorch, YOLO) và giải thuật xử lý tín hiệu phân tích trực tiếp luồng video và âm thanh tại trạm, chuyển hóa dữ liệu cảm biến thô thành cảnh báo tức thời, tối ưu hóa chu kỳ cho ăn và phát hiện sớm dấu hiệu căng thẳng hoặc dịch bệnh ở đàn cá.
- **Hạ tầng viễn thông & Máy chủ tin cậy:** Giao thức truyền tin mã hóa MQTT chuyển tiếp siêu dữ liệu và hình ảnh chắt lọc về máy chủ biên, lưu trữ chuỗi thời gian trên PostgreSQL, lưu tệp đa phương tiện trên MinIO và hiển thị trực quan qua dashboard điều hành thời gian thực.

</div>

## <span data-i18n-en>Evolution of Field Deployments: From Laboratory to Open Ocean</span><span data-i18n-vi>Hành trình thử nghiệm thực địa: Từ phòng thí nghiệm ra biển lớn</span>

<div data-i18n-en>

The system underwent an iterative four-phase engineering trajectory, validating hardware resilience, fluidics, and telemetry across diverse aquaculture environments:

</div>

<div data-i18n-vi>

Hệ thống đã trải qua quy trình nghiên cứu thực địa 4 giai đoạn nối tiếp nhau, hoàn thiện dần từ khả năng chống chịu phần cứng, cơ chế tuần hoàn mẫu nước đến độ tin cậy viễn thông qua nhiều môi trường nuôi thực tế:

</div>

### <span data-i18n-en>Phase 1: Laboratory Benchmarking & Multiplexed Fluidics at VNUA (Hanoi)</span><span data-i18n-vi>Giai đoạn 1: Đánh giá phòng thí nghiệm & Hệ thống thủy lực đa kênh tại VNUA (Hà Nội)</span>

<div data-i18n-en>

Development began at the Vietnam National University of Agriculture (VNUA), where controlled multi-tank environments allowed precise calibration of optical sensors and water quality instrumentation. 

To overcome the high cost of duplicating industrial probes across multiple tanks, the team engineered a custom fluidic manifold box. Using automated solenoid valve cycling, a single high-precision sensing chamber could cyclically sample distinct water tanks in sequence, with automated freshwater flush cycles to prevent cross-contamination.

</div>

<div data-i18n-vi>

Quá trình phát triển khởi đầu tại Học viện Nông nghiệp Việt Nam (VNUA), nơi hệ thống bể nuôi trong phòng thí nghiệm cho phép hiệu chuẩn chính xác các cảm biến quang học và cụm đầu dò chất lượng nước trong môi trường kiểm soát.

Để giải quyết bài toán chi phí khi phải nhân bản đầu dò công nghiệp đắt tiền cho từng bể nuôi, nhóm đã chế tạo hộp phân luồng thủy lực chuyên dụng. Cơ chế đóng mở van điện từ tuần tự cho phép một buồng đo cảm biến duy nhất lấy mẫu quay vòng từ nhiều bể khác nhau, kết hợp chu trình rửa nước sạch tự động để loại bỏ nhiễm chéo giữa các bể.

</div>

<div class="figure-grid">
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage1-vnua-lab-testing.jpg" alt="Controlled laboratory multi-tank testing at VNUA" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 1:</strong> Multi-tank experimental test bench at VNUA during overnight calibration of automated water circulation and optical tracking rigs.</span>
      <span data-i18n-vi><strong>Hình 1:</strong> Dàn bể thử nghiệm tại VNUA trong quá trình hiệu chuẩn đêm hệ thống tuần hoàn nước và camera theo dõi.</span>
    </figcaption>
  </figure>
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage1-vnua-sensor-manifold.jpg" alt="Automated solenoid valve water manifold box" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 2:</strong> Solenoid valve manifold assembly multiplexing fluid intake lines from distinct aquaculture tanks into a single sensor chamber.</span>
      <span data-i18n-vi><strong>Hình 2:</strong> Hộp van điện từ đa kênh tự động phân luồng dòng nước từ nhiều bể nuôi vào một buồng đo cảm biến duy nhất.</span>
    </figcaption>
  </figure>
</div>

### <span data-i18n-en>Phase 2: Pilot Raceway Hardening at RIA 1 (Hai Phong)</span><span data-i18n-vi>Giai đoạn 2: Thử nghiệm hoàn thiện tại bể nuôi RIA 1 (Hải Phòng)</span>

<div data-i18n-en>

Moving beyond benchtop testing, the prototype was deployed at the Research Institute for Aquaculture No. 1 (RIA 1) in Hai Phong. This phase tested the system inside operational concrete raceways and indoor breeding pools under high-humidity, saline aerosol conditions.

The team validated continuous underwater camera telemetry, watertight cable pass-throughs, and real-time data streaming to the central GREEN-X cloud dashboard, isolating and resolving ground-loop electrical noise caused by high-power water aerators.

</div>

<div data-i18n-vi>

Bước ra khỏi phòng thí nghiệm, nguyên mẫu hệ thống được triển khai thử nghiệm thực tế tại Viện Nghiên cứu Nuôi trồng Thủy sản 1 (RIA 1) tại Hải Phòng. Giai đoạn này thử thách thiết bị trong môi trường bể xi măng nuôi cá thương phẩm với độ ẩm bão hòa và bụi sương muối đặc trưng.

Nhóm nghiên cứu đã kiểm chứng tính ổn định của luồng dữ liệu camera ngầm, độ kín nước của các giắc nối hàng hải và khả năng đẩy dữ liệu trực tiếp về dashboard GREEN-X, đồng thời xử lý triệt để hiện tượng nhiễu vòng mass do dàn quạt sục khí công suất lớn gây ra.

</div>

<figure>
  <img src="/myself/images/projects/smart-aquaculture/stage2-ria1-indoor-aquaculture.jpg" alt="Indoor concrete raceway at RIA 1 Hai Phong" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 3:</strong> High-density indoor aquaculture raceway at RIA 1 Hai Phong instrumented with submerged water-quality probes and an overhead camera rig.</span>
    <span data-i18n-vi><strong>Hình 3:</strong> Hệ thống bể xi măng nuôi trong nhà tại RIA 1 Hải Phòng tích hợp chùm đầu dò ngầm và camera quan sát trên cao.</span>
  </figcaption>
</figure>

<div class="figure-grid">
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage2-ria1-field-team.jpg" alt="Team members completing installation of IoT monitoring equipment at RIA 1" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 4:</strong> Team members completing the installation of the IoT environmental monitoring station.</span>
      <span data-i18n-vi><strong>Hình 4:</strong> Các thành viên hoàn thành việc lắp đặt thiết bị IoT quan trắc.</span>
    </figcaption>
  </figure>
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage2-ria1-circuit-inspection.jpg" alt="Inspection of internal controller circuitry and waterproof glands" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 5:</strong> Technical inspection of power management circuitry, signal conditioning boards, and IP-rated marine enclosure cable glands.</span>
      <span data-i18n-vi><strong>Hình 5:</strong> Kiểm tra kỹ thuật mạch nguồn, bo mạch điều chế tín hiệu cảm biến và ốc siết cáp chống nước chuẩn hàng hải.</span>
    </figcaption>
  </figure>
</div>

### <span data-i18n-en>Strategic Provincial Alignment & Academic Collaboration in Khanh Hoa</span><span data-i18n-vi>Phối hợp chính quyền cấp tỉnh cùng Sở Tài chính & Hợp tác học thuật tại Đại học Nha Trang</span>

<div data-i18n-en>

Scaling IoT-driven smart aquaculture from closed indoor facilities to expansive coastal environments in Khanh Hoa required comprehensive institutional endorsement and specialized domain expertise:

- **Implementation Alignment with the Khanh Hoa Department of Finance:** The research team conducted strategic working sessions with the **Department of Finance of Khanh Hoa Province** (*Sở Tài chính Tỉnh Khánh Hòa*) to discuss deployment frameworks, inter-agency operational protocols, and policy integration for deploying automated environmental telemetry across provincial aquaculture zones.
- **Scientific Collaboration with Domain Experts at Nha Trang University (NTU):** Recognizing **Nha Trang University** as Vietnam's foremost academic institution in aquaculture, marine biotechnology, and fisheries science, researchers collaborated with NTU faculty and marine specialists to align environmental monitoring thresholds with biological indicators of finfish stress, feed response acoustics, and waterborne disease dynamics.

</div>

<div data-i18n-vi>

Việc mở rộng hệ thống AIoT nuôi biển thông minh từ các cơ sở trong nhà ra môi trường biển ven bờ quy mô lớn tại Khánh Hòa đòi hỏi sự đồng thuận cao từ chính quyền địa phương và sự đồng hành của các chuyên gia đầu ngành:

- **Họp bàn phương án triển khai với Sở Tài chính Tỉnh Khánh Hòa:** Đoàn nghiên cứu GREEN-X đã làm việc với lãnh đạo và chuyên viên **Sở Tài chính Tỉnh Khánh Hòa** nhằm thống nhất phương án triển khai, cơ chế phối hợp hành chính và định hướng chính sách hỗ trợ phát triển các mô hình nuôi biển công nghệ cao, kinh tế biển bền vững trên địa bàn tỉnh.
- **Hợp tác chuyên gia với Trường Đại học Nha Trang (NTU):** Với vị thế là trung tâm đào tạo và nghiên cứu thủy sản hàng đầu cả nước, các giáo sư và chuyên gia tại **Trường Đại học Nha Trang** đã trực tiếp tham gia trao đổi chuyên môn, cố vấn về sinh học cá biển, phản ứng âm thanh của đàn cá khi đớp mồi (bioacoustics) và xác lập các ngưỡng chất lượng nước cảnh báo sớm dịch bệnh.

</div>

<div class="figure-grid">
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/meeting-department-of-finance.jpg" alt="Implementation alignment meeting with Khanh Hoa Department of Finance" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 6:</strong> Working session with the Khanh Hoa Department of Finance (Sở Tài chính Tỉnh Khánh Hòa) to align on implementation frameworks and administrative support for smart aquaculture pilots.</span>
      <span data-i18n-vi><strong>Hình 6:</strong> Buổi làm việc với Sở Tài chính Tỉnh Khánh Hòa, họp bàn phương án triển khai và cơ chế phối hợp nhân rộng mô hình trạm quan trắc nuôi biển.</span>
    </figcaption>
  </figure>
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/meeting-nha-trang-university.jpg" alt="Expert collaboration meeting at Nha Trang University" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 7:</strong> Scientific collaboration and domain expert consultation meeting at Nha Trang University (Trường Đại học Nha Trang - NTU) focusing on aquaculture biology and underwater acoustics.</span>
      <span data-i18n-vi><strong>Hình 7:</strong> Hợp tác nghiên cứu chuyên sâu cùng các chuyên gia hàng đầu về thủy sản và sinh học biển tại Trường Đại học Nha Trang (NTU).</span>
    </figcaption>
  </figure>
</div>

### <span data-i18n-en>Phase 3: Offshore Floating Sea-Cage Deployment at Nha Phu Bay (Nha Trang)</span><span data-i18n-vi>Giai đoạn 3: Triển khai lồng bè nổi ngoài khơi tại Vịnh Nha Phu (Nha Trang)</span>

<div data-i18n-en>

The true test of marine resilience took place in the open waters of Nha Phu Bay, Khanh Hoa province. Here, commercial fish cages float kilometers offshore, subjected to tidal currents, heavy wave swells, salt spray, and tropical sunlight.

To ensure total self-sufficiency, the team engineered a dual-solar-powered station equipped with high-capacity lithium iron phosphate (LiFePO4) battery buffering and high-gain 4G/LTE cellular communications. The installation operated autonomously on the floating wooden platform, continuously beaming environmental parameters to mainland servers.

</div>

<div data-i18n-vi>

Bài kiểm tra khắc nghiệt nhất diễn ra trên vùng nước mở thuộc Vịnh Nha Phu, tỉnh Khánh Hòa. Tại đây, các lồng bè nuôi cá biển thương phẩm cách bờ hàng cây số, thường xuyên chịu tác động của dòng chảy thủy triều, sóng biển dập dềnh, bụi muối và nắng gắt nhiệt đới.

Để đảm bảo vận hành độc lập hoàn toàn, nhóm kỹ thuật đã phát triển trạm quan trắc dùng nguồn năng lượng mặt trời kép, tích hợp khối pin lưu trữ LiFePO4 dung lượng lớn và ăng-ten 4G/LTE chuyên dụng. Trạm vận hành tự hành trên bè gỗ ngoài khơi, liên tục phát dữ liệu môi trường về máy chủ đất liền.

</div>

<figure>
  <img src="/myself/images/projects/smart-aquaculture/stage3-nhaphu-floating-cages.jpg" alt="Offshore floating sea cages in Nha Phu Bay with solar station" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 8:</strong> Autonomous dual-solar telemetry station mounted atop offshore floating sea cages in Nha Phu Bay, Nha Trang.</span>
    <span data-i18n-vi><strong>Hình 8:</strong> Trạm quan trắc tự hành 2 tấm pin mặt trời lắp đặt trên hệ thống lồng bè nuôi cá biển ngoài khơi Vịnh Nha Phu.</span>
  </figcaption>
</figure>

<figure>
  <img src="/myself/images/projects/smart-aquaculture/stage3-nhaphu-team-deployment.jpg" alt="Minh-Hoang Pham and Phan Tuan Khoi at Nha Phu Bay floating platform" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 9:</strong> Lead researcher Minh-Hoang Pham, co-researcher Phan Tuan Khoi, and team collaborator on the floating raft platform celebrating successful offshore commissioning.</span>
    <span data-i18n-vi><strong>Hình 9:</strong> Trưởng nhóm kỹ thuật Phạm Minh Hoàng, cộng sự Phan Tuấn Khôi cùng thành viên nhóm trên bè nổi sau khi hoàn thành chạy thử nghiệm.</span>
  </figcaption>
</figure>

<figure>
  <video controls playsinline preload="metadata" poster="/myself/images/projects/smart-aquaculture/setup-nha-phu-bay-poster.jpg">
    <source src="/myself/videos/projects/smart-aquaculture/setup-nha-phu-bay.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <figcaption>
    <span data-i18n-en><strong>Video 1: System Setup at Nha Phu Bay</strong> — Aerial drone survey of the autonomous solar-powered telemetry station deployed on offshore floating aquaculture cages in Nha Phu Bay.</span>
    <span data-i18n-vi><strong>Video 1: Setup hệ thống tại Vịnh Nha Phu</strong> — Toàn cảnh hệ thống trạm quan trắc năng lượng mặt trời trên lồng bè nuôi biển ngoài khơi Vịnh Nha Phu nhìn từ drone.</span>
  </figcaption>
</figure>

### <span data-i18n-en>Phase 4: Circular Outdoor Tanks & Bioacoustics at RIA 3 (Nha Trang)</span><span data-i18n-vi>Giai đoạn 4: Bể nuôi tròn ngoài trời & Thủy âm sinh học tại RIA 3 (Nha Trang)</span>

<div data-i18n-en>

In the final operational stage, the infrastructure was installed at the Research Institute for Aquaculture No. 3 (RIA 3) in Nha Trang across large outdoor circular aquaculture pools. 

This installation unified environmental telemetry with underwater bioacoustic monitoring. An industrial embedded processing unit and dedicated multi-channel audio interface were integrated into the outdoor weatherproof enclosure, enabling real-time hydrophone signal capture to study fish feeding sounds and swimming dynamics in correlation with water quality fluctuations.

</div>

<div data-i18n-vi>

Ở giai đoạn vận hành mới nhất, hạ tầng thiết bị đã được lắp đặt tại Viện Nghiên cứu Nuôi trồng Thủy sản III (RIA 3) tại Nha Trang trên các bể nuôi cá tròn ngoài trời quy mô lớn.

Cụm lắp đặt này hợp nhất quan trắc môi trường với nghiên cứu thủy âm sinh học dưới nước. Một bộ máy tính nhúng công nghiệp cùng card thu âm thanh đa kênh chuyên dụng được tích hợp trong tủ chịu thời tiết ngoài trời, cho phép thu tín hiệu thủy âm (hydrophone) theo thời gian thực để nghiên cứu tiếng đớp mồi và hoạt động bơi lội tương ứng với biến động chất lượng nước.

</div>

<figure>
  <img src="/myself/images/projects/smart-aquaculture/meeting-with-ria.jpg" alt="Strategic collaboration meeting with the Research Institute for Aquaculture (RIA)" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 10:</strong> Strategic collaboration and technical working session between the VinUniversity GREEN-X delegation and the leadership of the Research Institute for Aquaculture (RIA).</span>
    <span data-i18n-vi><strong>Hình 10:</strong> Buổi làm việc kỹ thuật và hợp tác nghiên cứu giữa đoàn chuyên gia VinUniversity (GREEN-X) và lãnh đạo Viện Nghiên cứu Nuôi trồng Thủy sản (RIA).</span>
  </figcaption>
</figure>

<div class="figure-grid">
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage4-ria3-system-assembly.jpg" alt="System assembly and wiring at RIA 3 by Phan Tuan Khoi" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 11:</strong> Co-researcher Nguyen Xuan Quyen assembling the outdoor telemetry enclosure, integrating 4G LTE communications, hydrophone audio interface, and embedded processor.</span>
      <span data-i18n-vi><strong>Hình 11:</strong> Cộng sự Nguyễn Xuân Quyền hoàn thiện lắp ráp tủ trạm ngoài trời, tích hợp kết nối 4G LTE, giao tiếp âm thanh thủy âm (hydrophone) và máy tính nhúng.</span>
    </figcaption>
  </figure>
  <figure>
    <img src="/myself/images/projects/smart-aquaculture/stage4-ria3-tank-overview.jpg" alt="Panoramic view of RIA 3 outdoor aquaculture tanks" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 12:</strong> Elevated view of RIA 3 outdoor circular aquaculture tanks under continuous surveillance by the installed VinUniversity solar AIoT telemetry station.</span>
      <span data-i18n-vi><strong>Hình 12:</strong> Góc nhìn trên cao cụm bể nuôi tròn ngoài trời tại RIA 3 dưới sự giám sát liên tục của trạm AIoT VinUniversity.</span>
    </figcaption>
  </figure>
</div>

<figure>
  <video controls playsinline preload="metadata" poster="/myself/images/projects/smart-aquaculture/setup-ria3-nha-trang-poster.jpg">
    <source src="/myself/videos/projects/smart-aquaculture/setup-ria3-nha-trang.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <figcaption>
    <span data-i18n-en><strong>Video 2: System Setup at RIA 3 Nha Trang</strong> — VinUniversity outdoor telemetry enclosure, power distribution, and monitoring cameras mounted under the aquaculture tank roof.</span>
    <span data-i18n-vi><strong>Video 2: Setup hệ thống tại RIA 3 Nha Trang</strong> — Tủ trạm quan trắc VinUniversity, hệ thống cấp nguồn và camera giám sát gắn dưới mái che bể nuôi tại RIA 3.</span>
  </figcaption>
</figure>

## <span data-i18n-en>Technical Contributions & Open Science</span><span data-i18n-vi>Đóng góp kỹ thuật & Khoa học mở</span>

<div data-i18n-en>

- **Field-Tested Marine AIoT:** Demonstrated sustained autonomous operation across indoor raceways, land-based tank farms, and offshore floating sea cages.
- **Biofouling-Aware Vision:** Designed camera viewport cleanliness assessment algorithms, forming the basis of the published **CleanCam** benchmark dataset.
- **Multimodal Environmental & Acoustic Sensing:** Fused water-quality time-series with submerged bioacoustic telemetry for proactive aquaculture management.

</div>

<div data-i18n-vi>

- **AIoT biển được chứng thực thực địa:** Chứng minh khả năng vận hành tự hành bền bỉ trên các mô hình bể xi măng trong nhà, hệ thống bể nuôi tròn trên cạn và lồng bè nổi ngoài khơi xa.
- **Thị giác máy tính nhận diện bám bẩn:** Thiết kế thuật toán đánh giá độ sạch bề mặt kính camera dưới nước, đặt nền tảng cho tập dữ liệu chuẩn công bố quốc tế **CleanCam**.
- **Cảm biến đa phương thức môi trường & âm thanh:** Kết hợp chuỗi dữ liệu 5 thông số chất lượng nước với dữ liệu thủy âm sinh học để quản lý chủ động quá trình sinh trưởng và cho ăn trong nuôi trồng thủy sản.

</div>

---

## <span data-i18n-en>Citations & Institutional Reports</span><span data-i18n-vi>Tài liệu trích dẫn & Báo cáo công bố</span>

<div data-i18n-en>

The high-tech aquaculture technologies and provincial green transformation initiatives have been officially reported and documented by the Smart Green Transformation Center (GREEN-X), VinUniversity:

1. **High-Tech Aquaculture & Marine Conservation:**  
   [**Green-X And Nha Trang Bay Management Board Cooperate On Marine Conservation And High-Tech Aquaculture Project**](https://greenx.vinuni.edu.vn/green-x-and-nha-trang-bay-management-board-cooperate-on-marine-conservation-and-high-tech-aquaculture-project/) (August 22, 2025).  
   *Official coverage of the joint working session with the Nha Trang Bay Management Board to deploy AI and IoT platforms for sustainable marine development and high-tech aquaculture monitoring.*

2. **Khanh Hoa Province Green Transformation Technology Review:**  
   [**GREEN-X and Khanh Hoa Province Strengthen Collaboration on Technology Solutions for Green Transformation**](https://greenx.vinuni.edu.vn/green-x-and-khanh-hoa-province-strengthen-collaboration-on-technology-solutions-for-green-transformation/) (March 16, 2026).  
   *Review of telemetry platforms, smart operation management, and technology transfer for marine and coastal sustainable transformation in Khanh Hoa Province.*

</div>

<div data-i18n-vi>

Hoạt động nghiên cứu thực địa nuôi biển công nghệ cao và hợp tác chuyển đổi xanh với tỉnh Khánh Hòa được đưa tin và trích dẫn chính thức trên cổng thông tin Trung tâm Chuyển đổi xanh Thông minh (GREEN-X), Đại học VinUni:

1. **Nuôi biển công nghệ cao & Bảo tồn biển:**  
   [**GREEN-X và Ban Quản lý Vịnh Nha Trang hợp tác triển khai dự án Bảo tồn biển và Nuôi biển công nghệ cao**](https://greenx.vinuni.edu.vn/green-x-and-nha-trang-bay-management-board-cooperate-on-marine-conservation-and-high-tech-aquaculture-project/) (22/08/2025).  
   *Thông cáo chính thức về phiên làm việc với Ban Quản lý Vịnh Nha Trang triển khai ứng dụng Trí tuệ nhân tạo (AI) và Internet vạn vật (IoT) trong quản lý quan trắc nuôi biển và bảo tồn môi trường nước.*

2. **Hợp tác Công nghệ Chuyển đổi xanh Tỉnh Khánh Hòa:**  
   [**GREEN-X và Tỉnh Khánh Hòa tăng cường hợp tác về các giải pháp công nghệ phục vụ chuyển đổi xanh**](https://greenx.vinuni.edu.vn/green-x-and-khanh-hoa-province-strengthen-collaboration-on-technology-solutions-for-green-transformation/) (16/03/2026).  
   *Đánh giá tiến độ giải pháp công nghệ, trung tâm vận hành thông minh và kế hoạch chuyển giao công nghệ cho các cơ quan, đơn vị tại tỉnh Khánh Hòa.*

</div>

