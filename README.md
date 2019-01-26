<h1 align="center">
  Charge Action Order
</h1>

<h4 align="center">Microservice responsible for processing charging action triggers to other microservices.</h4>

<p align="center">
  <a href="#getting-started">Getting started</a>&nbsp;|&nbsp;<a href="#documentation">Documentation</a>&nbsp;|&nbsp;<a href="#demos-and-examples">Demos and examples</a>&nbsp;|&nbsp;<a href="#browser-support">Browser support</a>
</p>

## Getting started

### Prerequisites
- Java 11
- Localstack
- Gradle 5.x
- PostgreSQL

### Installation

- Clone repo

```bash
$ git clone git@github.com:UTBox/charge-action-order.git
```

- Setup database _charge_action_order_

### Build and Run

- Run `localstack`

```
localstack start
```

> Note: If you have problems starting `localstack`, try starting it via _docker_:
  ```
  localstack start -docker
  ```

- Run application:
  ```
  gradle bootRun
  ```


