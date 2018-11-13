package com.cvicse.boot;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ServerApplicationTests {

	private static final Logger LOG = LoggerFactory.getLogger(ServerApplicationTests.class);

	@Test
	public void contextLoads() {
	}

	@Test
	public void loggingTest() {
		// 测试基于 application.yml 配置logging参数
		LOG.trace("这是trace日志...");
		LOG.debug("这是debug日志...");
		LOG.info("这是info日志...");
		LOG.warn("这是warn日志...");
		LOG.error("这是error日志...");
	}
}
