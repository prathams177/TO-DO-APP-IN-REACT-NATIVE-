# TO-DO-APP-IN-REACT-NATIVE-
go to assets and search for ''enterTask.jpeg''  , "afterDELETEAPI.jpeg" folders to know how the app looks like.


log4j.rootLogger=DEBUG, console, file
 
log4j.appender.console=org.apache.log4j.ConsoleAppender
log4j.appender.console.layout=org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern=[%t] %-5p %c %x - %m%n
 
log4j.appender.file=org.apache.log4j.RollingFileAppender
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.file.layout.ConversionPattern=[%t] %-5p %c %x - %m%n
log4j.appender.file.File=applicationLogs.log
