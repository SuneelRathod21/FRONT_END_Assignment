function openModal(userName, userId, userType, createdBy, lastAccessedTime, contactNo, emailId, rowIndex) {
    document.getElementById("modalUserName").value = userName;
    document.getElementById("modalUserId").value = userId;
    document.getElementById("modalUserType").value = userType;
    document.getElementById("modalCreatedBy").value = createdBy;
    document.getElementById("modalLastAccessedTime").value = lastAccessedTime;
    document.getElementById("modalContactNo").value = contactNo;
    document.getElementById("modalEmailId").value = emailId;
  
    // Set the row index as a data attribute on the modal
    document.getElementById("userModal").setAttribute("data-row-index", rowIndex);
    
    document.getElementById("userModal").style.display = "block";
  }
  
  function updateEntity() {
    var userName1 = document.getElementById("modalUserName").value;
    var userId1 = document.getElementById("modalUserId").value;
    var userType1 = document.getElementById("modalUserType").value;
    var createdBy1 = document.getElementById("modalCreatedBy").value;
    var lastAccessedTime1 = document.getElementById("modalLastAccessedTime").value;
    var contactNo1 = document.getElementById("modalContactNo").value;
    var emailId1 = document.getElementById("modalEmailId").value;
    
    var rowIndex = document.getElementById("userModal").getAttribute("data-row-index");
    var row = document.getElementById("userTable").rows[rowIndex]; //updates the relevant elements in the row and calls the close modal
    
    // Update the table row with the new values
    row.cells[0].innerHTML = userName1;
    row.cells[1].innerHTML = userType1;
    row.cells[2].innerHTML = lastAccessedTime1;
    
    closeModal();
  }
  
  function closeModal() {
    document.getElementById("userModal").style.display = "none";
  }
  