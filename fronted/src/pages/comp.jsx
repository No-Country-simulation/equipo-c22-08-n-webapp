import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronDown, Info, Mail, Phone } from 'lucide-react'

const projectData = {
  name: "Sistema de Gestión de Inventario",
  description: "Desarrollo de un sistema completo de gestión de inventario para optimizar el control de stock y mejorar la eficiencia operativa.",
  client: {
    name: "TechnoSolutions Inc.",
    contact: "María González",
    email: "maria@technosolutions.com",
    phone: "+1 (555) 123-4567"
  },
  collaborators: [
    { name: "Carlos Rodríguez", role: "Desarrollador Frontend", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Ana López", role: "Desarrolladora Backend", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Diego Martínez", role: "Diseñador UX/UI", avatar: "/placeholder.svg?height=32&width=32" }
  ],
  tasks: {
    completed: [
      "Diseño de la arquitectura del sistema",
      "Implementación de la base de datos"
    ],
    inProgress: [
      "Desarrollo de la interfaz de usuario",
      "Integración con API de proveedores"
    ],
    newRequests: [
      "Módulo de reportes avanzados",
      "Integración con sistema de facturación"
    ]
  },
  demoLink: "https://demo.inventariosystem.com",
  features: {
    completed: [
      "Gestión de productos",
      "Control de stock en tiempo real"
    ],
    upcoming: [
      "Predicción de demanda con IA",
      "Integración con plataformas de e-commerce"
    ]
  }
}

export default function ProjectOverview() {
  const [isClientInfoOpen, setIsClientInfoOpen] = useState(false)

  return (
    <div className="container mx-auto p-4 space-y-6" style={{ backgroundColor: '#F3F3E0' }}>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#133E87]">{projectData.name}</h1>
        <Button onClick={() => setIsClientInfoOpen(true)} className="bg-[#608BC1] hover:bg-[#133E87]">
          <Info className="mr-2 h-4 w-4" /> Info del Proyecto
        </Button>
      </div>

      <Card className="bg-white">
        <CardHeader className="bg-[#133E87] text-white">
          <CardTitle>Descripción del Proyecto</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p>{projectData.description}</p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white">
          <CardHeader className="bg-[#133E87] text-white">
            <CardTitle>Colaboradores</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {projectData.collaborators.map((collaborator, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                    <AvatarFallback>{collaborator.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{collaborator.name}</p>
                    <p className="text-sm text-muted-foreground">{collaborator.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader className="bg-[#133E87] text-white">
            <CardTitle>Tareas</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="completed">
              <TabsList className="bg-[#CBDCEB]">
                <TabsTrigger value="completed" className="data-[state=active]:bg-[#608BC1] data-[state=active]:text-white">Completadas</TabsTrigger>
                <TabsTrigger value="inProgress" className="data-[state=active]:bg-[#608BC1] data-[state=active]:text-white">En Progreso</TabsTrigger>
                <TabsTrigger value="newRequests" className="data-[state=active]:bg-[#608BC1] data-[state=active]:text-white">Nuevas Solicitudes</TabsTrigger>
              </TabsList>
              <TabsContent value="completed">
                <ul className="list-disc pl-5 space-y-2">
                  {projectData.tasks.completed.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="inProgress">
                <ul className="list-disc pl-5 space-y-2">
                  {projectData.tasks.inProgress.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="newRequests">
                <ul className="list-disc pl-5 space-y-2">
                  {projectData.tasks.newRequests.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white">
        <CardHeader className="bg-[#133E87] text-white">
          <CardTitle>Funcionalidades</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Completadas</h3>
              <ul className="list-disc pl-5 space-y-2">
                {projectData.features.completed.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Próximamente</h3>
              <ul className="list-disc pl-5 space-y-2">
                {projectData.features.upcoming.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button
          as="a"
          href={projectData.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#608BC1] hover:bg-[#133E87]"
        >
          Ver Demo del Proyecto
        </Button>
      </div>

      <Dialog open={isClientInfoOpen} onOpenChange={setIsClientInfoOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="bg-[#133E87] text-white">Información del Cliente</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Nombre del Cliente</Label>
              <Input value={projectData.client.name} readOnly />
            </div>
            <div>
              <Label>Contacto</Label>
              <Input value={projectData.client.contact} readOnly />
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${projectData.client.email}`} className="text-[#608BC1] hover:underline">
                {projectData.client.email}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${projectData.client.phone}`} className="text-[#608BC1] hover:underline">
                {projectData.client.phone}
              </a>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsClientInfoOpen(false)}>Cerrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}