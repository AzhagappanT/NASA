package com.nasa.explorer.controller;

import com.nasa.explorer.model.ApodResponse;
import com.nasa.explorer.service.NasaApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/apod")
public class ApodController {

    private final NasaApiService nasaApiService;

    @Autowired
    public ApodController(NasaApiService nasaApiService) {
        this.nasaApiService = nasaApiService;
    }

    @GetMapping("/today")
    public ApodResponse getToday() {
        return nasaApiService.getToday();
    }

    @GetMapping("/date/{date}")
    public ApodResponse getByDate(@PathVariable String date) {
        return nasaApiService.getByDate(date);
    }

    @GetMapping("/range")
    public List<ApodResponse> getRange(@RequestParam String start_date, @RequestParam String end_date) {
        return nasaApiService.getRange(start_date, end_date);
    }
}
