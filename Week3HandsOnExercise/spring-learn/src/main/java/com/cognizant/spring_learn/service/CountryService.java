package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    @SuppressWarnings("unchecked")
    public Country getCountry(String code) {

        LOGGER.info("Start");

        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        List<Country> countryList = (List<Country>) context.getBean("countryList");

        for (Country country : countryList) {
            if (country.getCode().equalsIgnoreCase(code)) {
                LOGGER.info("End");
                return country;
            }
        }

        LOGGER.info("End");
        return null;
    }
}