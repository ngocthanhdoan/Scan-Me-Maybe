# Base image for PaddleOCR
FROM python:3.8-slim

# Cài đặt các phụ thuộc cần thiết cho PaddleOCR và OpenCV
RUN apt-get update && apt-get install -y \
    git \
    libgl1-mesa-glx \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Sao chép mã nguồn PaddleOCR từ thư mục đã clone vào Docker image
WORKDIR /PaddleOCR
COPY . .

# Cài đặt các thư viện yêu cầu cho PaddleOCR
RUN pip install -r requirements.txt

# Expose cổng cho PaddleOCR
EXPOSE 8081

# Chạy PaddleOCR HTTP Server
CMD ["python3", "tools/infer/predict_system.py", "--image_dir", "doc/imgs_words/ch", "--det_model_dir", "inference/ch_ppocr_server_v2.0_det_infer", "--rec_model_dir", "inference/ch_ppocr_server_v2.0_rec_infer", "--cls_model_dir", "inference/ch_ppocr_mobile_v2.0_cls_infer", "--use_angle_cls", "true", "--use_space_char", "true"]
