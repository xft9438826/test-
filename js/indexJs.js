	//div��ʾ������
	var MouseOver=function(name){
		var obj=document.getElementById(name);
		obj.style.display="block";
	}
	var MouseOut=function(name){
		var obj=document.getElementById(name);
		obj.style.display="none";
	}

	//���ſ������л�
	var i=1;
	var MouseClick=function(){
		i++;
		var obj1=document.getElementById('main1');
		var obj2=document.getElementById('main2');
		if (i%2==0)
		{
			obj1.style.display="none";
			obj2.style.display="block";
		}
		else{
			obj2.style.display="none";
			obj1.style.display="block";
		}
	}

	//δ��ɵ��ֲ�ͼ���޷����
	window.onload=function(){
		var oDivlbt=document.getElementById('lbt-mid');
		setInterval(function(){
			if(oDivlbt.offsetLeft<-oDivlbt.offsetWidth/2){
				oDivlbt.style.left='0';
			}
			oDivlbt.style.left=oDivlbt.offsetLeft-1200+'px';
		}, 2000);
	}