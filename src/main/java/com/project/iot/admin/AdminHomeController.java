package com.project.iot.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminHomeController {
	@GetMapping("/home")
	public String home() {
		return "admin/home";
	}
	
	@GetMapping("/mqtt_test")
	public String mqttTest() {
		return "admin/mqtt_test";
	}

	@GetMapping("/default_sensor_test")
	public String defaultSensorTest() {
		return "admin/default_sensor_test";
	}
	
	/*
	@GetMapping("/led_test")
	public String ledTest() {
		return "admin/led_test";
	}
	*/
}
