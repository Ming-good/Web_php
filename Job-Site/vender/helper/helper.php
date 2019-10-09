<?php
use Ming\DB\DBController as DB;

#리다이렉트
function redirect($url)
{
        header('Location:/Job-Site/'.$url);
}

#파일 업로드
function upload($uploadDir, array $inputName)
{
		#파일이름 해시
		$fileHash = bin2hex(openssl_random_pseudo_bytes(8));

		
		#확장자 체크
		$ext = array_pop(explode('.', strtolower($inputName['name'])));
		if(!in_array($ext, array('jpg', 'png', 'gif'))) return false;

		#파일사이즈 5M이하로 제한
		if($inputName['size'] > 5242880	)return false;

		$fileName = $fileHash.'.'.$ext;
 		ini_set('display_errors', 1);
               	$uploadFile = $uploadDir.basename($fileName);
               	if(move_uploaded_file($inputName['tmp_name'], $uploadFile)) {
               		echo 'Success';
               	} else {
                       	echo 'Faile';
               	}

		return $fileName;

}

#페이지 네비게이션
function pageList($count, $no)
{

       $page = 5;
       $morePage = 5;

       #현재 페이지
       $currentPage = empty($no) ? $no = 0 : $no;
       #페이지블럭 카운터
       $nowBlock = floor($currentPage/$page);
	 
       $endPage = $page*($nowBlock+1);
       $startPage = $endPage-$morePage;

       $nextPage=TRUE;
       $totalPage = ceil($count/5);
       if($endPage >= $totalPage) {
            $endPage=$totalPage;
            $nextPage=FALSE;
       }




       $data = compact('endPage', 'startPage','nextPage', 'currentPage');

       return $data;
}

#검색 기능
function search($search, $searchData, $switch)
{

        #만약 키워드가 빈 값이면 쓸모없어진 과정을 생략하고 searchData를 그대로 반환합니다.        
	if(!empty($search)) {
                $search = explode(' ', $search);

		#검색 키워드를 데이터베이스에서 가져옵니다.
                $db = DB::Connect();
                $sql = 'SELECT * FROM search';
                $stmt = $db -> prepare($sql);
                $stmt -> execute();
                $isData = $stmt -> fetchAll();

		#데이터베이스에서 가져온 검색키워드와 사용자가 입력한 검색키워드를 비교합니다. 
                $checkData = array();
                $result = array();
                foreach($search as $searchRow) {
                        $listData = array();
                        foreach($isData as $row) {
                                $match = '/'.$row['keyword'].'/iu';
                                $check = preg_match($match, $searchRow);
                                if($check==1) {
                                        array_push($listData, [title => $row['keyword'],num =>$row['counts']]);
                                }


                        }
			#만약 매치된 결과가 있다면 데이터베이스의 검색키워드와 false를 함께 배열에 넣습니다.
			#매치된 결과가 없다면 사용자가 입력한 검색키워드와true를 함께 배열에 넣습니다.
                        empty($listData) ? array_push($checkData, array($searchRow, true)) : array_push($checkData, [$listData, false]);
                }


		#띄어쓰기가 있는 검색어 일 경우 
		#false를 가진 checkData배열은 효율적인 검색을 위해 데이터베이스의 검색키워드끼리 길이와 위치를비교하여 result배열에 저장하고 
		#true를 가진 checkData배열은 그대로 result배열에 저장합니다. 
		$i = 0;
		$tempNum = 0;
                foreach($checkData as $row) {
                     if($row[1] == false) {
			     foreach($row[0] as $li) {
				    if($li['num'] > $tempNum){
					    $temp = $li['title'];
				    	    $tempNum = $li['num'];	    
				    } elseif($li['num'] == $tempNum && strlen($li['title']) > strlen($temp)) {
                                            $temp = $li['title'];
				    } elseif($li['num'] == $tempNum && strlen($li['title']) == strlen($temp)) {
                                            if(strpos($search[$i], $li['title']) <= strpos($search[$i], $temp['title'])) {
                                                    $temp = $li['title'];
                                            }
                                    }
				    $j++;
                            }
				    $i++;
                                    $row[0] = $temp;
                                    array_push($result, $row);
		         #해당 배열이 true가 아니며 result배열에 이미 존재하는 값이면 안된다.
                     } elseif($row[1] == true && !in_array($row, $result)) {
                           array_push($result, $row);
                     }
                }
	

		#키워드와 비교하여 검색할 데이터
		$data = $searchData;

		
		#검색키워드와 매치된 적이 있는지 확인하는 변수
		#위 과정을 거친 검색키워드와 데이터베이스의 데이터를 비교합니다.
                foreach($result as $resultRow) {
		$signal = 0;
                        $list = array();
                        $match = '/'.$resultRow[0].'/iu';
                        foreach($data as $row) {

                                $check1 = preg_match($match, $row['title']);

                                if($check1==1) {
                                        array_push($list, $row);
					$signal = 1;
                                }

                        }
			#검색된 데이터를 data에 넣음으로서 검색 정확도와 검색 범위를 줄여줍니다.
			$data = $list;
			if($signal == 0) {return $data;}
		}



		#만약 true이면 데이터베이스에 넣고 false이면 검색어 조회수를 올립니다.
		if($switch == 1) {
       		         foreach($result as $row) {
       	                 	if($row[1] == true) {
       	        	               	$sql = 'INSERT INTO search (keyword) VALUES (:keyword)';
       	            	        	$stmt = $db -> prepare($sql);
       	                        	$stmt -> BindValue(':keyword', $row[0]);
       	                        	$stmt -> execute();
				} else {
					$sql = "update search set counts = counts+1 where keyword=:keyword";
					$stmt = $db -> prepare($sql);
					$stmt -> BindValue(':keyword', $row[0]);
					$stmt -> execute();
				}
                	}
		}
	} else {
		 $data = $searchData;
	}
	
	return $data;
}
