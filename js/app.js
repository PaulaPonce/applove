/*
 * Archivo principal de funcionalidad de JS
 */
(function main(){
	var column = Array.from(document.getElementsByClassName("col-4"));
	var modal = document.getElementById("products-modal");

	var bodyModal, close, icon;

	column.forEach(function(col){
		//<div class="modal-body"></div>
		col.addEventListener("click", function(){
			modal.innerHTML = "";

			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = col.innerHTML;
			bodyModal.setAttribute("width", "100");
			modal.appendChild(bodyModal);
			modal.classList.remove("hide");

			close = document.createElement("div");
			close.classList.add("close");
			//bodyModal.appendChild(close);

			icon = document.createElement("i"); //<i class="fa fa-times" aria-hidden="true"></i>
			icon.classList.add("fa", "fa-times");
			icon.setAttribute("aria-hidden", "true");

			close.appendChild(icon);
			modal.appendChild(close);
			
			close.addEventListener("click", function(){
				modal.classList.add("hide");
			});
		});
	});
})();