import { Card } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold">Saikumar</h1>
        <p className="text-xl mt-2">AWS DevOps Engineer | Cloud Enthusiast</p>
      </div>

      <section className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg">
          I am an AWS DevOps Engineer with experience in cloud infrastructure, CI/CD pipelines,
          automation, and monitoring. Skilled in EC2, S3, IAM, Jenkins, Docker, Kubernetes, and more.
          Passionate about building scalable and secure solutions in the cloud.
        </p>
      </section>

      <section className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-lg">
          <li>AWS (EC2, IAM, VPC, S3, RDS, Lambda)</li>
          <li>CI/CD (Jenkins, Maven, Git, Docker, Kubernetes)</li>
          <li>Terraform, Ansible, Shell scripting</li>
          <li>Nginx, Tomcat, Ubuntu, Windows</li>
          <li>Monitoring (Prometheus, Grafana, CloudWatch)</li>
          <li>CloudFormation, Auto Scaling</li>
        </ul>
      </section>

      <section className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li>
            <Card className="p-4">
              <h3 className="text-xl font-bold">Website Hosting Using CI/CD</h3>
              <p>
                Automated web app deployment using Jenkins, Maven, Tomcat, and AWS.
              </p>
            </Card>
          </li>
          <li>
            <Card className="p-4">
              <h3 className="text-xl font-bold">AWS Infrastructure Deployment Using Terraform</h3>
              <p>
                Automated provisioning of AWS services like EC2, VPC, and S3 using Terraform.
              </p>
            </Card>
          </li>
          <li>
            <Card className="p-4">
              <h3 className="text-xl font-bold">Server Health Monitoring Tool (Shell Script)</h3>
              <p>
                Bash script to monitor server CPU, memory, and disk usage.
              </p>
            </Card>
          </li>
        </ul>
      </section>

      <section className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc list-inside text-lg">
          <li>AWS DevOps Engineer Training - Smart IT Solutions</li>
          <li>Terraform Deployment Project</li>
          <li>CI/CD Hosting Project</li>
          <li>Shell Script Monitoring Project</li>
        </ul>
      </section>

      <section className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <ul className="list-disc list-inside text-lg">
          <li>B.Tech in Computer Science - Sree Vahini Institute (2021–2024)</li>
          <li>Diploma - AIMS College of Engineering (2018–2021)</li>
          <li>SSC - Z.P.H School Peddadimili (2017–2018)</li>
        </ul>
      </section>

      <section className="mt-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <ul className="text-lg">
          <li>📞 7032174345</li>
          <li>✉️ saikumarbalaga03@gmail.com</li>
          <li>🔗 <a href="https://github.com/saikumar0503" className="text-blue-400">GitHub</a></li>
          <li>🔗 <a href="https://linkedin.com/in/sai-kumar-1855b0312" className="text-blue-400">LinkedIn</a></li>
          <li>📍 Hyderabad</li>
        </ul>
      </section>
    </div>
  );
}
