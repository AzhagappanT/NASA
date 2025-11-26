package com.nasa.explorer.service;

import com.nasa.explorer.model.ApodResponse;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Arrays;
import java.util.List;

@Service
public class NasaApiService {

    private final RestTemplate restTemplate;
    private final String apiKey;
    private final String apiUrl;

    @Autowired
    public NasaApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
        Dotenv dotenv = Dotenv.load();
        this.apiKey = dotenv.get("NASA_API_KEY");
        this.apiUrl = dotenv.get("NASA_API_URL");
    }

    @Cacheable("apod-today")
    public ApodResponse getToday() {
        String url = UriComponentsBuilder.fromHttpUrl(apiUrl)
                .queryParam("api_key", apiKey)
                .toUriString();
        return restTemplate.getForObject(url, ApodResponse.class);
    }

    @Cacheable(value = "apod-date", key = "#date")
    public ApodResponse getByDate(String date) {
        String url = UriComponentsBuilder.fromHttpUrl(apiUrl)
                .queryParam("api_key", apiKey)
                .queryParam("date", date)
                .toUriString();
        return restTemplate.getForObject(url, ApodResponse.class);
    }

    @Cacheable(value = "apod-range", key = "#startDate + '-' + #endDate")
    public List<ApodResponse> getRange(String startDate, String endDate) {
        String url = UriComponentsBuilder.fromHttpUrl(apiUrl)
                .queryParam("api_key", apiKey)
                .queryParam("start_date", startDate)
                .queryParam("end_date", endDate)
                .toUriString();
        ApodResponse[] response = restTemplate.getForObject(url, ApodResponse[].class);
        return response != null ? Arrays.asList(response) : List.of();
    }
}
