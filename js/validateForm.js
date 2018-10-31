/**
 * 
 */
function validateForm(form) {
	var doc = document;	
 // Заранее объявим необходимые переменные
      var el, // Сам элемент
            elName, // Имя элемента формы
            value, // Значение
            elId,//id
            type; // Атрибут type для input-ов
      // Массив списка ошибок, по дефолту пустой
      var errorList = [];
	  
	   // Хэш с текстом ошибок (ключ - ID ошибки)
      var errorText = {
            1 : "Не заполнено поле 'login'",
            2 : "Не заполнено поле 'password'",
            3 : "Не заполнено поле 'confirm_password'",
            4 : "Не совпадение паролей"             
      }
	
	// Получаем семейство всех элементов формы
      // Проходимся по ним в цикле
      valuePassword=0;
      valuePassword_Confirm=0;
      for (var i = 0; i < form.elements.length - 1; i++) {
            el = form.elements[i];
            elName = el.nodeName.toLowerCase();
            elId = el.id;
            value = el.value;            
            if (elName == "input") { // INPUT
                  // Определяем тип input-а
                  type = el.type.toLowerCase();

                  // Разбираем все инпуты по типам и обрабатываем содержимое                                      
                        switch (elId) {                                                   
                        case "login" :                              
                              if (el.name == "login" && value == "") {
									errorList.push(1); 										
								}
                        break;
                        case "password" :  
                              valuePassword = el.value;                                        
                              if (el.name == "password" && value == "")	{
									errorList.push(2);									
                                                }
                                                                                             
                        break;
                        case "confirm_password" :
                              valuePassword_Confirm = el.value;
                              if (el.name == "confirm_password" && value == ""){
                                    errorList.push(3);
                                    break;                                                    									
                              }
                              if(valuePassword_Confirm != valuePassword){
                                    errorList.push(4);                                    
                                    break;
                              } 
                              else {
                                    alert("Вы успешно зарегистрированы");
                                    window.location.href = 'index.html'; 
                                    return false;
                              }                   
                        break;                        
                        default : 
                                                                         
                              // Сюда попадают input-ы, которые не требуют обработки
                              // type = hidden, submit, button, image
                        break;
                  }
            } else {
 
            }
            
            
      }	  
	  // Финальная стадия
      // Если массив ошибок пуст - возвращаем true
      if (!errorList.length) return true;
      // Если есть ошибки - формируем сообщение, выовдим alert
      // и возвращаем false
      var errorMsg = "При заполнении формы допущены следующие ошибки:\n";
      for (i = 0; i < errorList.length; i++) {
            errorMsg += errorText[errorList[i]] + "\n";
                  
            if(errorList[i]==1){
                  field = doc.getElementsByTagName('input')[0];                  
			button = doc.getElementsByTagName('input')[3];
			field.classList.add('doAnimF');
			button.classList.add('doAnimBut');
			}
			else if(errorList[i]==2){
                  field = doc.getElementsByTagName('input')[1];                                   
			button = doc.getElementsByTagName('input')[3];
                  field.classList.add('doAnimF');                 
			button.classList.add('doAnimBut');
                  }
                  else if(errorList[i]==3){                       
                        field_confirm = doc.getElementsByTagName('input')[2];                  
                        button = doc.getElementsByTagName('input')[3];                       
                        field_confirm.classList.add('doAnimF');
                        button.classList.add('doAnimBut');
                        }
                  else if(errorList[i]==4) {
                        field = doc.getElementsByTagName('input')[1];                       
                        field_confirm = doc.getElementsByTagName('input')[2];                  
                        button = doc.getElementsByTagName('input')[3];
                        field.classList.add('doAnimF');                       
                        field_confirm.classList.add('doAnimF');
                        button.classList.add('doAnimBut');
                        }
                                    
      }	 
       /*  doc.getElementsByTagName('input')[3].disabled= '0'; */	
         
      alert(errorMsg);	
	
	return false;	

}