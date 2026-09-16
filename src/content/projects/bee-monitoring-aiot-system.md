---
title: Bee Health Monitoring AIoT System
title_vi: Hệ thống AIoT Giám sát Sức khỏe Đàn ong
description: An edge AI and IoT monitoring platform deployed on beehives for automated bee counting, microclimate sensing, and hive health tracking.
description_vi: Nền tảng giám sát AI biên và IoT triển khai trên thùng nuôi ong giúp tự động đếm số lượng ong, đo vi khí hậu và theo dõi sức khỏe đàn ong.
date: 2023-06-01
start: 2023-01
end: 2024-09
status: completed
featured: true
order: 4
cover: /images/projects/bee-monitoring-aiot-system.jpg
topics: [aiot-environmental-monitoring]
people: [pham-minh-hoang, vu-hai, pham-hong-thai]
publications: []
relatedProjects: []
technologies: [YOLOv5, Raspberry Pi 4B, Jetson Nano, IMX477 HQ Camera, Python, Flask, Flutter, MQTT, SQLite, DHT22]
organizations: [
  "Hanoi University of Science and Technology (HUST)",
  "Vietnam National University of Agriculture (VNUA)"
]
video: https://www.youtube.com/watch?v=ScjqHUr5pW8
---

## <span data-i18n-en>The Apiary Health Challenge</span><span data-i18n-vi>Thách thức trong giám sát sức khỏe đàn ong</span>

<div data-i18n-en>

Honeybee colonies play an indispensable role in ecological biodiversity and global agricultural food security. In Vietnam, beekeeping is a traditional, labor-intensive livelihood that historically depends on manual inspection: opening hives to assess colony strength, brood conditions, and queen health. This manual process is time-consuming, agitates the bees, and disrupts internal hive thermoregulation.

Developed under institutional research project **B2023-BKA.10**, this project was led by student researcher **Minh-Hoang Pham** under the academic advisement of **Assoc. Prof. Dr. Vu Hai** (School of Electrical and Electronic Engineering, Hanoi University of Science and Technology – HUST) in collaboration with **Assoc. Prof. Dr. Pham Hong Thai** at the Center for Tropical Bee Research and Beekeeping (Vietnam National University of Agriculture – VNUA). The project aimed to deliver an autonomous, non-invasive AIoT system that operates reliably in outdoor field environments with unstable network and power constraints.

</div>

<div data-i18n-vi>

Đàn ong mật đóng vai trò vô cùng quan trọng đối với đa dạng sinh học và an ninh lương thực toàn cầu. Tại Việt Nam, nghề nuôi ong truyền thống đòi hỏi nhiều nhân công và phụ thuộc nặng nề vào việc kiểm tra thủ công: người nuôi phải mở nắp thùng để quan sát thế đàn, tình trạng ấu trùng và ong chúa. Quy trình này tốn nhiều thời gian, làm xáo trộn đàn ong và gây mất ổn định vi khí hậu cũng như nhiệt độ tổ.

Được phát triển trong khuôn khổ đề tài nghiên cứu cấp bộ **B2023-BKA.10**, dự án do sinh viên nghiên cứu **Phạm Minh Hoàng** chủ trì dưới sự hướng dẫn khoa học của **PGS. TS. Vũ Hải** (Trường Điện - Điện tử, Đại học Bách khoa Hà Nội – HUST) phối hợp cùng **PGS. TS. Phạm Hồng Thái** tại Trung tâm Nghiên cứu Ong Nhiệt đới và Nuôi ong (Học viện Nông nghiệp Việt Nam – VNUA). Mục tiêu của dự án là xây dựng hệ thống AIoT tự hành, không xâm lấn, hoạt động bền bỉ ngoài trời trong điều kiện mạng và nguồn điện chập chờn.

</div>

## <span data-i18n-en>System Architecture & Hardware Engineering</span><span data-i18n-vi>Kiến trúc hệ thống & Thiết kế phần cứng</span>

<div data-i18n-en>

The appliance was engineered to mount directly onto standardized modern multi-tier beehives ("thùng kế"):

- **Embedded Edge Computing:** Deployed using Raspberry Pi 4B and NVIDIA Jetson Nano edge platforms to handle local data ingestion, device health checks, and deep learning inference.
- **Optical Entrance Monitor:** High-resolution Sony IMX477 HQ Camera module fitted with a 6mm CS-mount lens and Raspberry Pi Camera Module v2 with diffuse LED illumination to capture high-speed bee traffic across the hive entrance flight board.
- **Internal Microclimate Telemetry:** Industrial DHT22 environmental sensors positioned within hive frames to continuously track internal hive core temperature and relative humidity.
- **Resilient MQTT Telemetry Bridge:** Low-bandwidth, high-reliability MQTT messaging pipeline transferring compressed telemetry over intermittent cellular connectivity.
- **Central Relational Data Service:** SQLite-powered backend managing structured tables for hive metadata (`hives`), traffic counts (`bee`), hardware health metrics (`device_status`), and environmental logs (`temphum`).

</div>

<div data-i18n-vi>

Thiết bị được thiết kế tối ưu để gắn trực tiếp lên các thùng nuôi ong dạng thùng kế hiện đại tiêu chuẩn:

- **Tính toán nhúng tại biên (Edge Computing):** Sử dụng các nền tảng máy tính nhúng Raspberry Pi 4B và NVIDIA Jetson Nano để tiếp nhận dữ liệu cảm biến, kiểm tra sức khỏe phần cứng và chạy mô hình học sâu suy luận trực tiếp.
- **Camera quan sát cửa tổ:** Module camera độ phân giải cao Sony IMX477 HQ kèm ống kính CS 6mm và camera Raspberry Pi v2 kết hợp vòm LED chiếu sáng khuếch tán để ghi nhận dòng ong bay ra vào với tốc độ cao trên ván bay.
- **Quan trắc vi khí hậu trong tổ:** Đầu dò môi trường công nghiệp DHT22 bố trí giữa các cầu ong để theo dõi liên tục nhiệt độ và độ ẩm tương đối của tổ.
- **Truyền thông MQTT bền bỉ:** Đường truyền bản tin MQTT băng thông thấp, độ tin cậy cao giúp đẩy dữ liệu nén về máy chủ ngay cả khi kết nối mạng di động chập chờn.
- **Cơ sở dữ liệu quan hệ trung tâm:** Hệ thống backend SQLite quản lý cấu trúc dữ liệu gồm thông tin tổ (`hives`), số lượng ong đếm được (`bee`), trạng thái hoạt động phần cứng (`device_status`) và nhật ký môi trường (`temphum`).

</div>

<figure>
  <img src="/myself/images/projects/bee-monitoring/system-architecture.png" alt="Bee Health Monitoring AIoT System Architecture Diagram" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 1:</strong> End-to-end AIoT system architecture connecting edge video processing nodes via MQTT to central database, web management platform, and cross-platform mobile application.</span>
    <span data-i18n-vi><strong>Hình 1:</strong> Kiến trúc hệ thống AIoT toàn diện kết nối các nút xử lý thị giác biên qua MQTT đến cơ sở dữ liệu trung tâm, nền tảng web và ứng dụng di động.</span>
  </figcaption>
</figure>

<figure>
  <img src="/myself/images/projects/bee-monitoring/hardware-installation.png" alt="Hardware Installation on Multi-tier Beehive" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 2:</strong> Physical hardware assembly mounted on standardized multi-tier beehives ("thùng kế"), featuring Sony IMX477 HQ camera with CS lens, edge processing unit, and diffuse lighting canopy.</span>
    <span data-i18n-vi><strong>Hình 2:</strong> Cụm phần cứng gắn trên thùng kế tiêu chuẩn, tích hợp camera Sony IMX477 ống kính CS, bộ xử lý biên và vòm chiếu sáng khuếch tán.</span>
  </figcaption>
</figure>

## <span data-i18n-en>Edge AI Vision: Real-Time Bee Counting with YOLOv5</span><span data-i18n-vi>AI thị giác tại biên: Đếm ong thời gian thực với YOLOv5</span>

<div data-i18n-en>

To accurately monitor colony activity without disrupting natural worker bee behavior, an optimized **YOLOv5** deep learning model was trained to track and count individual bees entering and exiting the hive:

- **High Sensitivity:** Achieved a **97.0% sensitivity rate** in detecting rapidly moving worker bees under varying outdoor lighting conditions.
- **Minimal False Alarms:** Maintained an ultra-low **0.56% false alarm rate**, filtering out shadows, background flight board artifacts, and dense clustering.
- **Continuous Traffic Curves:** Provided entomologists with high-frequency activity curves distinguishing morning foraging bursts from evening return patterns.

</div>

<div data-i18n-vi>

Để theo dõi chuẩn xác hoạt động của đàn ong mà không làm xáo trộn hành vi tự nhiên, mô hình học sâu **YOLOv5** được tối ưu hóa để bám vết và đếm số lượng ong thợ ra vào cửa tổ:

- **Độ nhạy phát hiện cao:** Đạt độ nhạy phát hiện **97.0%** đối với ong di chuyển nhanh trong nhiều điều kiện chiếu sáng tự nhiên khác nhau.
- **Tỷ lệ báo động giả cực thấp:** Giữ tỷ lệ báo sai chỉ **0.56%**, loại bỏ hiệu quả bóng râm, vết bẩn trên ván bay và hiện tượng ong chen chúc dày đặc.
- **Đường cong hoạt động liên tục:** Cung cấp cho các chuyên gia côn trùng học biểu đồ hoạt động tần suất cao, phân biệt rõ các đợt đi kiếm ăn rộ vào buổi sáng và nhịp bay trở về tổ vào buổi chiều.

</div>

<figure>
  <img src="/myself/images/projects/bee-monitoring/ai-yolov5-detection.png" alt="YOLOv5 Bee Counting Model Architecture and Detection Results" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 3:</strong> YOLOv5 neural network architecture and real-time bounding box detection validating 97.0% sensitivity and 0.56% false alarm rate under intense entrance traffic.</span>
    <span data-i18n-vi><strong>Hình 3:</strong> Kiến trúc mạng nơ-ron YOLOv5 và kết quả nhận diện bounding box thời gian thực đạt độ nhạy 97.0% và tỷ lệ báo động giả 0.56%.</span>
  </figcaption>
</figure>

<figure>
  <img src="/myself/images/projects/bee-monitoring/live-stream-monitoring.png" alt="Real-time Stream and Bee Count Monitoring" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 4:</strong> Real-time camera feed ingestion and automated entrance counting interface hosted on MICA Institute infrastructure.</span>
    <span data-i18n-vi><strong>Hình 4:</strong> Giao diện tiếp nhận luồng video thời gian thực và đếm ong tự động được triển khai trên hạ tầng Viện MICA.</span>
  </figcaption>
</figure>

## <span data-i18n-en>Cloud Dashboard, Mobile App & Device Health Automation</span><span data-i18n-vi>Dashboard đám mây, Ứng dụng di động & Tự động giám sát phần cứng</span>

<div data-i18n-en>

To support field beekeepers and entomologists across distributed apiary sites, a multi-platform software ecosystem was built:

- **Central Web Management Platform:** Developed with a Python Flask backend and responsive interface (tested on MICA Institute infrastructure at `http://mica.edu.vn:50208/`) showing real-time bee traffic charts, temperature/humidity variations, and historical time-series analytics.
- **Cross-Platform Mobile Application:** Built using Google Flutter and Dart, allowing beekeepers to receive push alerts, monitor live counts, and review individual hive microclimates on Android and iOS devices.
- **Automated Hardware Watchdog:** Automated device diagnostics logging CPU core temperature, RAM usage, and camera stream status, with an automated 15-minute polling heartbeat that triggers alert notifications if a field node loses connectivity.

</div>

<div data-i18n-vi>

Nhằm hỗ trợ người nuôi ong và các nhà nghiên cứu trên nhiều trại ong phân tán, một hệ sinh thái phần mềm đa nền tảng đã được hoàn thiện:

- **Hệ thống web quản lý trung tâm:** Phát triển trên nền tảng Python Flask với giao diện tương thích đa thiết bị (thử nghiệm trên hạ tầng Viện MICA tại `http://mica.edu.vn:50208/`), hiển thị đồ thị lưu lượng ong, biến thiên nhiệt ẩm và dữ liệu phân tích lịch sử.
- **Ứng dụng di động đa nền tảng:** Xây dựng bằng Google Flutter và Dart, cho phép người nuôi ong nhận thông báo đẩy tức thời, theo dõi số lượng ong ra vào và xem vi khí hậu từng thùng trên thiết bị Android và iOS.
- **Cơ chế Watchdog giám sát phần cứng:** Hệ thống tự động ghi nhật ký nhiệt độ CPU, mức sử dụng RAM và trạng thái luồng camera, đồng thời phát nhịp tim (heartbeat) định kỳ 15 phút để gửi cảnh báo nếu trạm đo mất kết nối.

</div>

<figure>
  <img src="/myself/images/projects/bee-monitoring/web-dashboard.png" alt="Web Monitoring Platform Dashboard" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 5:</strong> Central web dashboard displaying real-time bee traffic trends, temperature/humidity time-series curves, and hardware health metrics.</span>
    <span data-i18n-vi><strong>Hình 5:</strong> Giao diện web trung tâm hiển thị xu hướng lưu lượng ong theo thời gian thực, biểu đồ nhiệt ẩm và các chỉ số sức khỏe phần cứng.</span>
  </figcaption>
</figure>

<figure>
  <img src="/myself/images/projects/bee-monitoring/mobile-app.png" alt="Cross-Platform Flutter Mobile Application Interface" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 6:</strong> Flutter cross-platform mobile application interface providing beekeepers with push alerts, live counting statistics, and remote hive diagnostics.</span>
    <span data-i18n-vi><strong>Hình 6:</strong> Ứng dụng di động Flutter đa nền tảng cung cấp cảnh báo đẩy, thống kê số lượng ong và chẩn đoán tổ ong từ xa.</span>
  </figcaption>
</figure>

## <span data-i18n-en>Practical Field Deployment & Long-Term Results</span><span data-i18n-vi>Triển khai thực địa & Kết quả vận hành dài hạn</span>

<div data-i18n-en>

The system transitioned from laboratory prototypes into long-term agricultural operations across Vietnam:

- **4 Operational Field Installations:** 3 complete AIoT monitoring units deployed at commercial honeybee farms in **Đắk Lắk province**, and 1 reference unit installed at the **Center for Tropical Bee Research and Beekeeping** (VNUA, Gia Lâm, Hanoi).
- **4+ Months Continuous Operation:** Validated hardware durability, thermal stability, and sensor calibration across multi-month field operations during monsoon and peak harvest seasons.
- **Scientific & Practical Impact:** Demonstrated the feasibility of cost-effective edge computer vision and IoT telemetry in rural tropical agriculture, laying architectural foundations for subsequent environmental AIoT research.

</div>

<div data-i18n-vi>

Hệ thống đã bước ra khỏi phòng thí nghiệm để vận hành thực tế dài hạn tại các vùng nông nghiệp trên cả nước:

- **4 điểm lắp đặt thực địa:** 3 cụm thiết bị AIoT hoàn chỉnh được vận hành tại các trang trại nuôi ong thương phẩm ở **tỉnh Đắk Lắk**, và 1 trạm tham chiếu chuẩn tại **Trung tâm Nghiên cứu Ong Nhiệt đới và Nuôi ong** (VNUA, Gia Lâm, Hà Nội).
- **Hơn 4 tháng hoạt động liên tục:** Khẳng định độ bền bỉ cơ khí, độ ổn định nhiệt và tính tin cậy của cảm biến trong nhiều tháng liên tục suốt mùa mưa và mùa thu hoạch mật cao điểm.
- **Ý nghĩa khoa học và thực tiễn:** Chứng minh tính khả thi của giải pháp thị giác máy tính tại biên và viễn thông IoT chi phí hợp lý trong nông nghiệp nhiệt đới, tạo tiền đề kiến trúc cho các công trình nghiên cứu AIoT môi trường sau này.

</div>

<figure>
  <img src="/myself/images/projects/bee-monitoring/field-deployment.png" alt="Field Deployment in Dak Lak and VNUA Bee Research Center" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 7:</strong> Long-term field trials across commercial apiaries in Đắk Lắk and the Center for Tropical Bee Research and Beekeeping (VNUA) verifying continuous 4+ months outdoor reliability.</span>
    <span data-i18n-vi><strong>Hình 7:</strong> Thử nghiệm thực địa dài hạn tại các trại ong ở Đắk Lắk và Trung tâm Nghiên cứu Ong Nhiệt đới (VNUA) xác thực độ bền bỉ ngoài trời trên 4 tháng.</span>
  </figcaption>
</figure>

## <span data-i18n-en>Behind the Scenes: From Workbench Prototyping to Outdoor Apiaries</span><span data-i18n-vi>Hậu trường nghiên cứu: Từ bàn thí nghiệm đến các trại ong ngoài trời</span>

<div data-i18n-en>

Building deployable edge AI for agricultural environments requires navigating physical constraints that cannot be simulated in software alone:

- **Benchtop Edge Synthesis:** The engineering journey began with perforated mounting plates, terminal wiring, and thermal testing on the lab workbench. The NVIDIA Jetson Nano core was integrated with active heatsink cooling to sustain continuous neural network inference, coupled with an industrial 4G/LTE cellular gateway and stabilized power conversion designed to withstand rural electrical fluctuations.
- **Non-Invasive Mechanical Co-Design:** To preserve the hive's internal microclimate and natural worker bee flight patterns, the optical sensor was retrofitted onto standard Vietnamese wooden multi-tier hives ("thùng kế") using an adjustable ball-head mount. This focused the camera directly onto the entrance flight board while protecting sensitive CSI ribbon cables along the outer perimeter.
- **Hands-On Field Realization:** Theoretical designs culminated in direct field trials at the Center for Tropical Bee Research and Beekeeping (VNUA). Working amidst active honeybee colonies and tropical weather, the system was hand-wired, optically calibrated, and stress-tested under harsh sunlight and humidity—bridging the gap between laboratory concepts and robust agricultural reality.

</div>

<div data-i18n-vi>

Việc chế tạo hệ thống AI biên vận hành ngoài hiện trường đòi hỏi phải giải quyết hàng loạt bài toán vật lý mà việc mô phỏng trên phần mềm không thể tái hiện:

- **Tích hợp phần cứng trên bàn thí nghiệm:** Hành trình kỹ thuật bắt đầu từ các tấm gá lỗ, dây nối domino và kiểm thử tản nhiệt trên bàn lab. Khối xử lý NVIDIA Jetson Nano được trang bị quạt tản nhiệt chủ động để duy trì tải suy luận mạng nơ-ron liên tục, tích hợp bộ gateway 4G/LTE công nghiệp và mạch chuyển đổi nguồn ổn áp chịu được biến động lưới điện nông thôn.
- **Thiết kế cơ khí không xâm lấn:** Để duy trì vi khí hậu tự nhiên và đường bay của ong thợ, cụm cảm biến quang học được gắn khéo léo vào thùng kế gỗ bằng khớp cầu xoay đa hướng. Thiết kế này hướng trực diện camera vào ván bay mà vẫn bảo vệ an toàn cho sợi cáp dẹp CSI nhạy cảm chạy quanh thân thùng.
- **Triển khai thực địa trực tiếp:** Ý tưởng thiết kế được kiểm chứng qua các đợt thực địa tại Trung tâm Nghiên cứu Ong Nhiệt đới (VNUA). Trực tiếp làm việc giữa hàng trăm đàn ong đang hoạt động dưới thời tiết nắng nóng nhiệt đới, nhóm đã tự tay đấu nối, căn chỉnh tiêu cự camera và kiểm tra độ bền thiết bị — đưa nghiên cứu khoa học vào ứng dụng thực tế.

</div>

<div class="figure-grid">
  <figure>
    <img src="/myself/images/projects/bee-monitoring/lab-hardware-prototyping.jpg" alt="Benchtop prototyping of the edge AIoT computing board" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 8:</strong> Benchtop integration of the NVIDIA Jetson Nano edge node, active heatsink cooling fan, 4G LTE communications gateway, CSI camera ribbon lines, and isolated power distribution.</span>
      <span data-i18n-vi><strong>Hình 8:</strong> Lắp ráp thử nghiệm bộ xử lý NVIDIA Jetson Nano, quạt tản nhiệt, gateway 4G LTE, cáp camera CSI và khối phân phối nguồn cách ly.</span>
    </figcaption>
  </figure>
  <figure>
    <img src="/myself/images/projects/bee-monitoring/hive-optical-integration.jpg" alt="Mechanical and optical integration on the wooden beehive" loading="lazy" />
    <figcaption>
      <span data-i18n-en><strong>Figure 9:</strong> Custom non-invasive optical mount attached to a standard wooden multi-tier hive ("thùng kế"), orienting the camera canopy toward the entrance flight board without altering colony traffic.</span>
      <span data-i18n-vi><strong>Hình 9:</strong> Khung gá quang học tùy biến gắn trên thùng kế gỗ tiêu chuẩn, hướng camera vào cửa tổ mà không làm xáo trộn đường bay của đàn ong.</span>
    </figcaption>
  </figure>
</div>

<figure>
  <img src="/myself/images/projects/bee-monitoring/field-calibration-researcher.jpg" alt="Hands-on field installation and sensor calibration by the author" loading="lazy" />
  <figcaption>
    <span data-i18n-en><strong>Figure 10:</strong> Lead researcher Minh-Hoang Pham conducting hands-on sensor wiring, 4G telemetry checks, and optical alignment on hive #3 at the Tropical Bee Research Center apiary.</span>
    <span data-i18n-vi><strong>Hình 10:</strong> Tác giả Phạm Minh Hoàng trực tiếp đấu nối cảm biến, kiểm tra truyền tin 4G và căn chỉnh quang học trên tổ số 3 tại trại ong Trung tâm Nghiên cứu Ong Nhiệt đới.</span>
  </figcaption>
</figure>

## <span data-i18n-en>Project Video Demonstration</span><span data-i18n-vi>Video Trực quan hóa Hệ thống</span>

<div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0; border-radius: var(--radius, 8px);">
  <iframe src="https://www.youtube-nocookie.com/embed/ScjqHUr5pW8" title="Bee Monitoring AIoT System Demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>
