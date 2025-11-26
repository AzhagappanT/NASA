package com.nasa.explorer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class NasaExplorerApplication {

	public static void main(String[] args) {
		SpringApplication.run(NasaExplorerApplication.class, args);
	}

}
