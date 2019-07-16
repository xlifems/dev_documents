// MySQL Error Access Denied For Root User in Ubuntu Linux

== Spring Cloud GCP Bill of Materials (BOM)

If you're a Maven user, add our BOM to your pom.xml `<dependencyManagement>` section.
This will allow you to not specify versions for any of the Maven dependencies and instead delegate versioning to the BOM.

[source,xml]
----
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-gcp-dependencies</artifactId>
            <version>1.1.1.RELEASE</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
----
