# Web_php
라라벨 블레이드 템플릿 엔진을 이용해서 자체적으로 만든 프레임워크로 제작한 개인 포트폴리오 웹사이트 입니다.

# 설정
### 라라벨 블레이드 템플릿 엔진 패키지스트 주소
`https://packagist.org/packages/duncan3dc/blade` 

### mariaDB이용

### apache2.4버전 이용

### 블레이드 템플릿을 컴포저 하기위해 사용한 PHP 모듈
`sudo apt-get install -y libapache2-mod-php7.2 php7.2 php7.2-cgi php7.2-cli php7.2-common php7.2-curl php7.2-fpm php7.2-gd php7.2-json php7.2-mbstring php7.2-mysql php7.2-xml` 

### PDO가 설치안되어 있을 경우
`sudo apt-get install php7.2-mysql`

### 아파치 서버에 mod_rewrite 활성화
- `sudo a2enmod rewrite`
- `/etc/apache2/apache2.conf에서 AllowOverride 옵션을 All로 변경`
```vim
 <Directory /var/www/>
        AllowOverride All
        Require all granted
 </Directory>
``` 
- `sudo service apache2 restart`
 
### 데이터베이스 설정파일 위치
`Job-Site/Ming/DB/dbconfig.php`
 
 
