# CloudFlow - Laboratorio DevOps

Flujo de la práctica:

`dev -> Pull Request -> main -> GitHub Actions -> AWS Learner Lab EC2 -> Apache`

## Archivos
- `index.html`: página principal.
- `assets/style.css`: apariencia visual.
- `assets/app.js`: comportamiento simple.
- `.github/workflows/deploy.yml`: pipeline de despliegue.

## Secretos de GitHub requeridos
- `AWS_HOST`: IPv4 Public IP de la instancia EC2.
- `AWS_USER`: para Amazon Linux, normalmente `ec2-user`.
- `AWS_SSH_KEY`: contenido completo de `labsuser.pem`, descargado desde **AWS Details > SSH Key > Download PEM** en Learner Lab.

## Importante
En AWS Academy Learner Lab la IP pública puede cambiar si la instancia se detiene/inicia. Antes de una nueva práctica, verifica la IPv4 Public IP y actualiza `AWS_HOST` si corresponde.
