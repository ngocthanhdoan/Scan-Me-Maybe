package com.web.app.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Collections;

@Service
public class OcrService {

    @Value("${OCR_SERVER_URL}")
    private String ocrServerUrl;

    public String processFile(MultipartFile file) throws IOException {
        File convertedFile = convertMultipartFileToFile(file);
        String ocrResult = callOcrApi(convertedFile);
        return formatOcrResult(ocrResult);
    }

    private File convertMultipartFileToFile(MultipartFile file) throws IOException {
        File convFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }

    private String callOcrApi(File file) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(org.springframework.http.MediaType.MULTIPART_FORM_DATA);

        HttpEntity<File> requestEntity = new HttpEntity<>(file, headers);
        ResponseEntity<String> response = restTemplate.exchange(
                ocrServerUrl + "/ocr", HttpMethod.POST, requestEntity, String.class);
        return response.getBody();
    }

    private String formatOcrResult(String ocrResult) {
        // Tùy chỉnh kết quả OCR theo yêu cầu của bạn, như loại bỏ ký tự đặc biệt, định dạng theo dòng...
        return ocrResult.replaceAll("[^\\p{L}\\p{Nd}\\s]", "").trim();
    }
}
