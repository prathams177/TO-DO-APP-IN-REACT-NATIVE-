# TO-DO-APP-IN-REACT-NATIVE-
go to assets and search for ''enterTask.jpeg''  , "afterDELETEAPI.jpeg" folders to know how the app looks like.


send

package rabbitmqapp;

import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.Channel;

public class Messagesender {
	  private final static String QUEUE_NAME = "Message_Queue";
	  public static void main(String[] argv) throws Exception {
		  ConnectionFactory factory = new ConnectionFactory();
		  factory.setHost("localhost");
		  try (Connection connection = factory.newConnection();
		       Channel channel = connection.createChannel()) {
			  channel.queueDeclare(QUEUE_NAME, false, false, false, null);
			  String message = "Hello World!";
			  channel.basicPublish("", QUEUE_NAME, null, message.getBytes());
			  System.out.println(" [x] Sent '" + message + "'");

		  }
		 
	      
	      
	  }
	}
	
	
	receive 
	
	package rabbitmqapp;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DeliverCallback;


public class MessageReceiver {
	 private final static String QUEUE_NAME = "Message_Queue";

	  public static void main(String[] argv) throws Exception {
	    ConnectionFactory factory = new ConnectionFactory();
	    factory.setHost("localhost");
	    Connection connection = factory.newConnection();
	    Channel channel = connection.createChannel();

	    channel.queueDeclare(QUEUE_NAME, false, false, false, null);
	    System.out.println(" [*] Waiting for messages. To exit press CTRL+C");
	    
	    DeliverCallback deliverCallback = (consumerTag, delivery) -> {
	        String message = new String(delivery.getBody(), "UTF-8");
	        System.out.println(" [x] Received '" + message + "'");
	    };
	    channel.basicConsume(QUEUE_NAME, true, deliverCallback, consumerTag -> { });


	  }

}


log4j

# Root logger option
log4j.rootLogger=INFO, stdout, file

# Log the messages to the console
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.Target=System.out
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n

# Log the messages to a log file with file rolling
log4j.appender.file=org.apache.log4j.RollingFileAppender
log4j.appender.file.File=C:\\JAVA\\log4j-application.log
log4j.appender.file.MaxFileSize=4MB
log4j.appender.file.MaxBackupIndex=10
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.file.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n

 
