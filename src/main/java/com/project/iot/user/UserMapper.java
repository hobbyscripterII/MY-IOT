package com.project.iot.user;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
	com.project.iot.security.MyUserDetails getUser(String id);
}