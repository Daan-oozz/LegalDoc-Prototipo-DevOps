document.addEventListener('DOMContentLoaded', () => {
    // 1. Verificación de sesión y carga de datos del usuario
    const userName = localStorage.getItem('userName');
    const userRole = localStorage.getItem('userRole');

    if (!userName) {
        // Si no hay sesión, devuelve al login
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('displayUserName').textContent = userName;
    document.getElementById('displayUserRole').textContent = userRole;

    // 2. Base de datos simulada de documentos activos
    let documentos = [
        { id: 1, nombre: 'Contrato_Arrendamiento_Local_01.pdf', version: 'v1.0', fecha: '2026-10-01', estado: 'Revisión Pendiente' },
        { id: 2, nombre: 'Poder_General_Representacion.pdf', version: 'v2.1', fecha: '2026-10-03', estado: 'Aprobado' },
        { id: 3, nombre: 'Demanda_Laboral_Caso405.docx', version: 'v1.3', fecha: '2026-10-05', estado: 'Borrador' }
    ];

    const tbody = document.getElementById('documentTableBody');

    // Función para renderizar la tabla
    function renderTable() {
        tbody.innerHTML = '';
        documentos.forEach(doc => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <svg class="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                        <span class="text-sm font-medium text-slate-900">${doc.nombre}</span>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">${doc.version}</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">${doc.fecha}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${doc.estado === 'Aprobado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">${doc.estado}</span>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    // Renderizado inicial
    renderTable();

    // 3. Lógica principal: Simulación de subida y versionado automático
    const uploadBtn = document.getElementById('uploadBtn');
    const fileInput = document.getElementById('fileInput');
    const uploadMessage = document.getElementById('uploadMessage');

    uploadBtn.addEventListener('click', () => {
        if (!fileInput.files || fileInput.files.length === 0) {
            alert('Por favor, seleccione un documento primero.');
            return;
        }

        const fileName = fileInput.files[0].name;
        
        // Simular que estamos actualizando el "Contrato de Arrendamiento"
        // En un sistema real esto buscaría el ID, aquí actualizamos el primero de la lista para el prototipo
        documentos[0].version = 'v2.0'; 
        documentos[0].fecha = new Date().toISOString().split('T')[0];
        documentos[0].estado = 'Actualizado';

        // Re-renderizar la tabla para mostrar el cambio
        renderTable();

        // Mostrar mensaje de éxito temporalmente
        uploadMessage.classList.remove('hidden');
        setTimeout(() => {
            uploadMessage.classList.add('hidden');
            fileInput.value = ''; // Limpiar el input
        }, 3000);
    });

    // 4. Lógica de Cerrar Sesión
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.clear();
        window.location.href = 'index.html';
    });
});