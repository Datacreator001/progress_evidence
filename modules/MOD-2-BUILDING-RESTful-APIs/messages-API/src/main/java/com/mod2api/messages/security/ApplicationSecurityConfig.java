package com.mod2api.messages.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import static com.mod2api.messages.security.ApplicationUserPermission.MESSAGE_WRITE;
import static com.mod2api.messages.security.ApplicationUserRole.*;

@Configuration
@EnableWebSecurity
public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;

    @Autowired

    public ApplicationSecurityConfig(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // TODO
                .authorizeRequests()
                .antMatchers("/","index","/css/*","/js/*").permitAll()
                .antMatchers("/Apprentices/**","/messages/**").hasRole(APPRENTICE.name())
                .antMatchers(HttpMethod.DELETE, "/management/Apprentices/**").hasAuthority(MESSAGE_WRITE.getPermission())
                .antMatchers(HttpMethod.POST, "/management/Apprentices/**").hasAuthority(MESSAGE_WRITE.getPermission())
                .antMatchers(HttpMethod.PUT, "/management/Apprentices/**").hasAuthority(MESSAGE_WRITE.getPermission())
                .antMatchers( HttpMethod.GET, "/management/Apprentices/**").hasAnyRole(ADMIN.name(),ADMINTRAINEE.name())
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();
    }
    @Override
    @Bean
    protected UserDetailsService userDetailsService() {
        UserDetails annaSmithUser = User.builder()
                .username("annasmith")
                .password(passwordEncoder.encode("password"))
//                .roles(APPRENTICE.name()) // ROLE_APPRENTICE
                .authorities(APPRENTICE.getGrantedAuthorities())
                .build();
        UserDetails lindaUser = User.builder()
                .username("Linda")
                .password(passwordEncoder.encode("password123"))
//                .roles(ADMIN.name()) // ROLE_ADMIN
                .authorities(ADMIN.getGrantedAuthorities())
                .build();

        UserDetails tonyUser = User.builder()
                .username("Tony")
                .password(passwordEncoder.encode("password123"))
//                .roles(ADMINTRAINEE.name()) // ROLE_ADMINTRAINEE
                .authorities(ADMINTRAINEE.getGrantedAuthorities())
                .build();
        return new InMemoryUserDetailsManager(
                annaSmithUser,
                lindaUser,
                tonyUser
        );
    }
}
