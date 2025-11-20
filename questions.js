const questions = [
  // =========================
  // 1) Introduction & Core Concepts
  // =========================
  {
    category: 'Introduction & Core Concepts',
    question: 'What is the primary purpose of Kubernetes?',
    options: [
      'To build container images',
      'To orchestrate and manage containers at scale',
      'To replace the Linux kernel',
      'To manage only virtual machines'
    ],
    answer: 1,
    explanation: 'Kubernetes is a container orchestration platform that schedules, manages, and scales containers across a cluster.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Which statement best describes a Kubernetes cluster?',
    options: [
      'A single node running multiple VMs',
      'A set of machines working together to run containerized workloads',
      'A Docker registry',
      'A load balancer endpoint'
    ],
    answer: 1,
    explanation: 'A Kubernetes cluster is a group of machines (nodes) that together run containerized workloads managed by the control plane.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Why do we need Kubernetes when we already have Docker?',
    options: [
      'Docker cannot run on Linux',
      'Docker is only for Windows',
      'Kubernetes manages and orchestrates many containers across multiple machines',
      'Kubernetes is required to build Docker images'
    ],
    answer: 2,
    explanation: 'Docker runs individual containers, while Kubernetes handles deploying, scaling, healing, and networking many containers across nodes.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Which of the following is a key benefit of Kubernetes?',
    options: [
      'Manual container restarts',
      'Automatic restarts, rescheduling, and scaling of containers',
      'Running containers only on a single host',
      'Replacing all CI tools'
    ],
    answer: 1,
    explanation: 'Kubernetes provides self healing, auto scaling, and intelligent scheduling for containers.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Kubernetes mainly helps with which type of problem?',
    options: [
      'Running a single test container on a laptop',
      'Managing hundreds or thousands of containers reliably',
      'Compiling source code',
      'Managing Git repositories'
    ],
    answer: 1,
    explanation: 'Kubernetes becomes important when the number of containers and nodes grows large and needs orchestration.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Which analogy from your notes best matches Kubernetes?',
    options: [
      'A text editor',
      'A central manager assigning delivery boys and replacing them if they fail',
      'A static web page',
      'A single virtual machine'
    ],
    answer: 1,
    explanation: 'Your content compares Kubernetes to a central manager that assigns, tracks, and replaces delivery boys (containers).'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Which of the following is NOT a problem Kubernetes tries to solve?',
    options: [
      'Load balancing traffic across replicas',
      'Automating container restarts',
      'Automatic scaling of workloads',
      'Compiling application source code'
    ],
    answer: 3,
    explanation: 'Kubernetes does not compile application code; it focuses on running and managing already built container images.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'In the plant and sprinkler analogy, Kubernetes is compared to:',
    options: [
      'A plant',
      'Manual watering using a single bucket',
      'An automatic sprinkler system that waters many plants',
      'A flower pot'
    ],
    answer: 2,
    explanation: 'Kubernetes automates the management of many containers, similar to a sprinkler automating watering many plants.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Which statement about containers is true?',
    options: [
      'Containers include a full guest OS like VMs',
      'Containers share the host OS kernel and are lightweight',
      'Containers require a hypervisor to run',
      'Containers always boot slower than VMs'
    ],
    answer: 1,
    explanation: 'Containers are lightweight and share the host OS kernel, which makes them faster and more resource efficient than VMs.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Which statement about virtual machines (VMs) is correct?',
    options: [
      'VMs do not need an operating system',
      'VMs are lighter than containers',
      'VMs package a full OS, making them heavier than containers',
      'VMs cannot run on cloud platforms'
    ],
    answer: 2,
    explanation: 'VMs include a full guest OS, which makes them heavier and slower to boot compared to containers.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'What is a Pod in Kubernetes?',
    options: [
      'A group of namespaces',
      'A wrapper around one or more containers',
      'A physical node in the data center',
      'A YAML file'
    ],
    answer: 1,
    explanation: 'A Pod is the smallest deployable unit in Kubernetes and wraps one or more containers.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Which is true about Pods and containers in Kubernetes?',
    options: [
      'Kubernetes runs containers directly without Pods',
      'Every container must run in at least two Pods',
      'Kubernetes runs containers inside Pods and does not manage naked containers',
      'Pods and containers are the same thing'
    ],
    answer: 2,
    explanation: 'Kubernetes always manages containers through Pods; it does not handle standalone containers directly.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'In your analogy, a VM is compared to:',
    options: [
      'A shared lunch table',
      'A single lunchbox',
      'A whole house for one person',
      'A delivery van'
    ],
    answer: 2,
    explanation: 'The notes compare a VM to a whole house for one person, showing it is heavy and isolated.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'In your analogy, a Pod is compared to:',
    options: [
      'A lunch table where one or two lunchboxes sit together',
      'A whole building',
      'A grocery store',
      'A delivery truck'
    ],
    answer: 0,
    explanation: 'The Pod analogy is a lunch table where one or two lunchboxes sit together and share the same space.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Which of the following is most closely related to Kubernetes desired state?',
    options: [
      'The current CPU usage of a node',
      'The number and configuration of resources that you declare in YAML',
      'The Dockerfile instructions',
      'The contents of a container image'
    ],
    answer: 1,
    explanation: 'Desired state is declared in YAML manifests and Kubernetes controllers continuously work to match the actual state to it.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Which of these is a core advantage of Kubernetes for deployments?',
    options: [
      'Manual, one by one pod updates',
      'No support for rolling updates',
      'Rolling updates and rollbacks without manual pod management',
      'No way to control replicas'
    ],
    answer: 2,
    explanation: 'Deployments in Kubernetes support rolling updates and rollbacks while hiding low level pod management.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Which of the following best describes Kubernetes scaling?',
    options: [
      'Scaling is only done by cloud providers, not Kubernetes',
      'Scaling means adding more YAML files',
      'Kubernetes can increase or decrease the number of pod replicas',
      'Scaling is only possible by adding more namespaces'
    ],
    answer: 2,
    explanation: 'Kubernetes scaling usually means changing the number of pod replicas managed by a controller like a Deployment.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'What happens when a pod managed by a Deployment crashes?',
    options: [
      'Nothing, it stays terminated',
      'The Deployment creates a new pod to maintain the desired replica count',
      'Kubernetes deletes the Deployment automatically',
      'The cluster shuts down'
    ],
    answer: 1,
    explanation: 'Deployments are self healing and will recreate pods to match the desired number of replicas.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Why are containers preferred over VMs for microservices?',
    options: [
      'Containers cannot share the OS',
      'Containers are heavier but more secure',
      'Containers start faster and use fewer resources, which fits microservices',
      'Containers require no runtime'
    ],
    answer: 2,
    explanation: 'Containers are lightweight and fast, which makes them ideal for microservices running at scale.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Which of the following is a typical use case for Kubernetes?',
    options: [
      'Running a single cron job on one machine',
      'Running many stateless microservices that need scaling and resilience',
      'Editing source code',
      'Replacing GitHub'
    ],
    answer: 1,
    explanation: 'Kubernetes is commonly used for stateless microservices that require automatic scaling and healing.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Which of these is NOT a direct feature of Kubernetes?',
    options: [
      'Self healing of pods',
      'Load balancing across pods',
      'Automatic rolling updates',
      'Continuous integration pipeline execution'
    ],
    answer: 3,
    explanation: 'CI pipelines are usually handled by external tools like Jenkins, GitHub Actions, or GitLab, not by Kubernetes itself.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'When traffic to an application increases suddenly, Kubernetes can help by:',
    options: [
      'Stopping all pods',
      'Automatically scaling replicas of the application',
      'Deleting the namespace',
      'Rebuilding the Docker images'
    ],
    answer: 1,
    explanation: 'Kubernetes can scale the number of pod replicas to handle increased traffic, often via a Horizontal Pod Autoscaler.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Kubernetes mainly focuses on which type of workloads?',
    options: [
      'Bare metal OS installation',
      'Containerized workloads',
      'Legacy mainframe applications without containers',
      'Only serverless functions'
    ],
    answer: 1,
    explanation: 'Kubernetes is designed to orchestrate containerized applications.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Which is an example of self healing in Kubernetes?',
    options: [
      'Manual restart of pods',
      'Pods staying in a crashed state forever',
      'Controllers recreating failed pods automatically',
      'Nodes rebooting themselves on failure'
    ],
    answer: 2,
    explanation: 'Controllers like Deployments recreate failed pods to restore the desired state.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Kubernetes is best described as which type of system?',
    options: [
      'Configuration management tool only',
      'Container orchestration platform',
      'Operating system',
      'Storage array manager'
    ],
    answer: 1,
    explanation: 'Kubernetes is a container orchestration platform used to manage containerized workloads.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Which part of Kubernetes is responsible for keeping track of all objects and their state?',
    options: [
      'Docker daemon',
      'Hypervisor',
      'etcd key value store',
      'Load balancer'
    ],
    answer: 2,
    explanation: 'etcd stores the cluster state, including nodes, pods, configs, and other objects.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'What is the smallest deployable unit in Kubernetes?',
    options: [
      'Container',
      'Pod',
      'Node',
      'Namespace'
    ],
    answer: 1,
    explanation: 'A Pod is the smallest deployable unit in Kubernetes.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Why should you understand the difference between containers, pods, and VMs early?',
    options: [
      'They use the same configuration files',
      'They decide how you write HTML and CSS',
      'They form the fundamental building blocks and isolation levels in Kubernetes',
      'They are only used during installation'
    ],
    answer: 2,
    explanation: 'Your notes emphasize that understanding containers, pods, and VMs is crucial before going deeper into Kubernetes.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'In Kubernetes terminology, where do applications actually run?',
    options: [
      'Directly on the master node',
      'Inside pods on worker nodes',
      'Inside etcd',
      'Inside the API server'
    ],
    answer: 1,
    explanation: 'Applications run inside containers, which live inside pods on worker nodes.'
  },
  {
    category: 'Introduction & Core Concepts',
    question: 'Which of the following describes a core design goal of Kubernetes?',
    options: [
      'Manual control over every restart',
      'Declarative configuration and reconciliation to desired state',
      'Building monolithic applications',
      'Eliminating the need for containers'
    ],
    answer: 1,
    explanation: 'Kubernetes uses a declarative model where you describe the desired state and controllers continuously reconcile the actual state to match it.'
  },

  // =========================
  // 2) Kubernetes Architecture
  // =========================
  {
    category: 'Kubernetes Architecture',
    question: 'Which part of Kubernetes is often called the control plane or master?',
    options: [
      'Worker nodes',
      'Pods',
      'The set of components that plan and coordinate the cluster',
      'Docker daemon'
    ],
    answer: 2,
    explanation: 'The control plane, often called the master, is responsible for planning, scheduling, and controlling the cluster.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'Which statement about the control plane is correct?',
    options: [
      'It runs user application containers directly',
      'It only stores logs',
      'It does not run applications and instead focuses on thinking and coordinating',
      'It is optional in a Kubernetes cluster'
    ],
    answer: 2,
    explanation: 'Your notes clearly say the master or control plane does not run applications; it decides, plans, and coordinates.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'What is the role of the kube-apiserver?',
    options: [
      'To store container images',
      'To be the single entry point for all communication with the cluster',
      'To run user containers',
      'To provide a web dashboard'
    ],
    answer: 1,
    explanation: 'The API server is the central front door; all components and users communicate with the cluster through it.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'Which component decides on which node a new pod should run?',
    options: [
      'kubelet',
      'Container runtime',
      'kube-scheduler',
      'kube-proxy'
    ],
    answer: 2,
    explanation: 'The scheduler assigns pods to nodes based on resource requirements and cluster conditions.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'What is the main responsibility of the controller manager?',
    options: [
      'Executing shell scripts on nodes',
      'Monitoring cluster state and reconciling it with desired state',
      'Running etcd backups by default',
      'Building container images'
    ],
    answer: 1,
    explanation: 'The controller manager runs controllers that continuously check cluster health and make corrections to match desired state.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'Which component is described as the memory of the cluster?',
    options: [
      'kube-proxy',
      'kubelet',
      'etcd',
      'Docker'
    ],
    answer: 2,
    explanation: 'etcd is the key value store that remembers cluster state, such as nodes, pods, configs, and more.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'On a worker node, which component talks to the API server and ensures pods are running as expected?',
    options: [
      'kubelet',
      'kube-proxy',
      'etcd',
      'Scheduler'
    ],
    answer: 0,
    explanation: 'kubelet is the agent on each node that interacts with the API server to manage pods and report node status.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'What is the primary job of kube-proxy?',
    options: [
      'Persisting cluster state',
      'Scheduling pods',
      'Handling network routing and service IPs on nodes',
      'Managing node storage'
    ],
    answer: 2,
    explanation: 'kube-proxy handles IP tables or IPVS rules to route traffic to pods and implement Services at the node level.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'What runs user application containers on a worker node?',
    options: [
      'Container runtime such as Docker or containerd',
      'etcd',
      'API server',
      'Controller manager'
    ],
    answer: 0,
    explanation: 'The container runtime is responsible for starting and running containers on the node.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'Which statement about master and worker nodes is correct?',
    options: [
      'Only master nodes run containers',
      'Worker nodes are responsible for running pods that host user applications',
      'Workers only store logs',
      'There is no difference between master and worker'
    ],
    answer: 1,
    explanation: 'Workers (data plane) run the actual pods, while the master (control plane) manages the cluster.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'In your notes, which analogy best describes the control plane?',
    options: [
      'The muscles',
      'The warehouse',
      'The brain',
      'The lunchbox'
    ],
    answer: 2,
    explanation: 'The control plane is described as the brain that decides and coordinates but does not do the physical work.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'In your analogy, worker nodes are best described as:',
    options: [
      'The brain',
      'The muscles that do the work',
      'The memory of the cluster',
      'The filesystem'
    ],
    answer: 1,
    explanation: 'Workers are the muscles that run pods and containers.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'Which of these operations goes through the API server?',
    options: [
      'Running containers directly with Docker run',
      'kubectl get pods',
      'Editing a text file locally',
      'Running a bash script on your laptop'
    ],
    answer: 1,
    explanation: 'kubectl communicates with the API server for every operation, such as get, apply, or delete.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'What does kubectl primarily interact with?',
    options: [
      'kube-proxy directly',
      'etcd directly in most cases',
      'The API server',
      'The container runtime'
    ],
    answer: 2,
    explanation: 'kubectl sends requests to the Kubernetes API server, which then interacts with other components.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'Which of the following is a correct statement from your important note?',
    options: [
      'kubectl and kube-proxy are the same',
      'kubectl is for management, kube-proxy is for networking',
      'kube-proxy is used only by administrators',
      'kubectl forwards traffic to pods for external users'
    ],
    answer: 1,
    explanation: 'Your notes explicitly call out kubectl as management and kube-proxy as networking for user traffic.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'Where do normal end users typically send their traffic in Kubernetes?',
    options: [
      'Directly to containers',
      'To the API server',
      'To a Service, which forwards to pods',
      'To etcd'
    ],
    answer: 2,
    explanation: 'Users or clients interact with a Service, which load balances and routes to pods.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'What is the primary responsibility of the scheduler?',
    options: [
      'Assigning pods to nodes based on resources and constraints',
      'Serving web dashboards to users',
      'Managing persistent storage classes',
      'Encrypting etcd data'
    ],
    answer: 0,
    explanation: 'The scheduler analyses pod requirements and chooses the best node.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'Which component is most responsible for continuously checking that the desired number of pods is running?',
    options: [
      'kube-scheduler',
      'Controller manager',
      'kube-proxy',
      'Container runtime'
    ],
    answer: 1,
    explanation: 'Controllers, managed by the controller manager, ensure the correct number and state of objects are maintained.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'Which statement is true about etcd in a production Kubernetes cluster?',
    options: [
      'It is optional and used only for logging',
      'It should be treated as critical due to holding cluster state',
      'It only stores pod logs',
      'It is run on every worker node'
    ],
    answer: 1,
    explanation: 'etcd holds critical state and should be backed up and secured.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'The diagram in your notes shows each control plane and worker as:',
    options: [
      'A separate EC2 instance, VM, or physical machine',
      'A separate Docker image only',
      'A separate YAML file',
      'A single process'
    ],
    answer: 0,
    explanation: 'You mention that each box can be an EC2 instance, VM, or physical machine.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'Which command line tool is used by developers to manage Kubernetes clusters?',
    options: [
      'kubectl',
      'kube-proxy',
      'kubelet',
      'docker-compose'
    ],
    answer: 0,
    explanation: 'kubectl is the CLI tool to talk to the Kubernetes API and manage resources.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'Which component is present on every worker node?',
    options: [
      'kubelet and kube-proxy',
      'Scheduler',
      'Controller manager',
      'etcd'
    ],
    answer: 0,
    explanation: 'Each worker node runs kubelet and typically kube-proxy, along with a container runtime.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'Kubernetes workers mainly host:',
    options: [
      'Control plane components',
      'Only etcd instances',
      'Pods that contain application containers',
      'Only networking components'
    ],
    answer: 2,
    explanation: 'Workers host pods, which run application containers.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'Which of these best describes the access section in your architecture explanation?',
    options: [
      'It is about how storage is configured on nodes',
      'It deals with kubectl and Services as access points',
      'It explains only pod health',
      'It configures the scheduler'
    ],
    answer: 1,
    explanation: 'The access section covers kubectl for cluster management and Services for user access.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'What does the kubelet do if the API server asks it to run a pod?',
    options: [
      'Ignores the request',
      'Asks the scheduler to choose a node',
      'Uses the container runtime to start containers and then reports status',
      'Writes the pod spec to etcd directly'
    ],
    answer: 2,
    explanation: 'kubelet starts containers using the runtime and reports pod and node health back to the API server.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'How does kube-proxy typically implement Service networking?',
    options: [
      'By updating IP tables or IPVS rules',
      'By modifying pod YAML files',
      'By storing IPs in etcd only',
      'By editing the Dockerfile'
    ],
    answer: 0,
    explanation: 'kube-proxy programs the node networking stack, for example using IP tables or IPVS.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'Which of these best explains the relationship between users, Services, and pods?',
    options: [
      'Users talk directly to pods on random IPs',
      'Users talk to Services, which route to pods',
      'Users talk to etcd, which responds from pods',
      'Users talk only to the scheduler'
    ],
    answer: 1,
    explanation: 'Services abstract pods and provide stable virtual IPs that route traffic to pods.'
  },
  {
    category: 'Kubernetes Architecture',
    question: 'If the scheduler is down, which of the following is most likely impacted?',
    options: [
      'Existing pods stop responding immediately',
      'New pod scheduling decisions cannot be made',
      'Container runtime cannot start',
      'kubectl cannot connect to the API server'
    ],
    answer: 1,
    explanation: 'Existing pods will keep running, but new pods cannot be scheduled to nodes.'
  },

  // =========================
  // 3) Cluster Setup & Tooling (kubeadm, minikube, kind, managed k8s)
  // =========================
  {
    category: 'Cluster Setup & Tooling',
    question: 'Which tool is described in your notes as giving full control and teaching how a real cluster is built?',
    options: [
      'Minikube',
      'kubeadm',
      'Docker Desktop',
      'Helm'
    ],
    answer: 1,
    explanation: 'kubeadm is compared to manual transmission driving and gives deep control over cluster setup.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'Which analogy is used for Minikube in your notes?',
    options: [
      'RC car track',
      'Manual car on a highway',
      'Scooter for practice',
      'Bullet train'
    ],
    answer: 2,
    explanation: 'Minikube is compared to a scooter: simple, lightweight, single node for learning.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'Which tool creates Kubernetes clusters inside Docker containers?',
    options: [
      'kubeadm',
      'minikube',
      'kind',
      'EKS'
    ],
    answer: 2,
    explanation: 'Kind stands for Kubernetes in Docker and creates clusters using Docker containers as nodes.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'Which type of cluster is best described as "actual highways" in your notes?',
    options: [
      'Minikube',
      'kubeadm on bare metal',
      'kind',
      'Managed clusters like EKS, AKS, GKE'
    ],
    answer: 3,
    explanation: 'Cloud managed services such as EKS, AKS, and GKE are compared to real highways.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'Which of the following statements is true about Minikube?',
    options: [
      'It always creates multi node clusters',
      'It creates a single node cluster, mainly for local learning',
      'It requires multiple VMs by default',
      'It can only run in the cloud'
    ],
    answer: 1,
    explanation: 'Minikube generally creates single node clusters on a local machine for learning.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'What is a key benefit of using Kind for local development?',
    options: [
      'It requires heavy VMs',
      'It is very slow to create and delete clusters',
      'It uses Docker containers for nodes and is very resource efficient',
      'It only works on Windows'
    ],
    answer: 2,
    explanation: 'Kind uses Docker containers to emulate nodes, which makes it fast and lightweight.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'According to your notes, what is the minimum recommended RAM for running Kind locally on a laptop?',
    options: [
      '2 GB',
      '4 GB',
      '8 GB',
      '16 GB'
    ],
    answer: 2,
    explanation: 'You mention that if the laptop has 8 GB RAM, you can run Kind locally.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'Which combination of tools is required in your hands on Kind setup?',
    options: [
      'Docker, kind, kubectl',
      'Docker, Helm, Terraform',
      'Kubeadm, minikube, kubectl',
      'Ansible, Helm, Docker'
    ],
    answer: 0,
    explanation: 'You explicitly list Docker, Kind, and kubectl as prerequisites for the Kind based cluster.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'What is the purpose of the usermod command in your Docker installation steps?',
    options: [
      'To install Docker',
      'To start kubectl',
      'To allow the current user to run Docker commands without sudo',
      'To configure etcd'
    ],
    answer: 2,
    explanation: 'usermod -aG docker adds the current user to the docker group to use Docker without sudo.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'Why might you choose a cloud VM instead of your laptop to run Kind?',
    options: [
      'Because Kind does not support macOS',
      'Because Windows Home or low resources may struggle with Docker and Kind',
      'Because kubectl only works on the cloud',
      'Because Pods require cloud load balancers'
    ],
    answer: 1,
    explanation: 'Your notes suggest using a cloud VM if the laptop is slow or limited, especially on certain OS versions.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'In the Kind cluster YAML, what does the role field specify?',
    options: [
      'The pod name',
      'The container image version',
      'Whether a node is control plane or worker',
      'The namespace name'
    ],
    answer: 2,
    explanation: 'The role field in Kind defines if the node is a control plane or a worker.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'In your Kind YAML example, what is the purpose of extraPortMappings?',
    options: [
      'To define pod ports inside the cluster',
      'To map container ports on the Kind node to host machine ports',
      'To expose etcd ports',
      'To configure kubectl contexts'
    ],
    answer: 1,
    explanation: 'extraPortMappings expose specific ports from the Kind node container to the host so you can access services.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'In your Kind configuration, why is mapping port 80 and 443 important?',
    options: [
      'They are used by kubectl',
      'They are default ports for HTTP and HTTPS access to applications',
      'They are required for container runtime',
      'They are used to access etcd'
    ],
    answer: 1,
    explanation: 'HTTP and HTTPS typically use ports 80 and 443, so mapping them allows easy access to web applications.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'Which statement about managed Kubernetes services like EKS and AKS is true?',
    options: [
      'They remove the need for nodes',
      'They fully manage the control plane for you',
      'They do not support scaling',
      'They replace kubectl'
    ],
    answer: 1,
    explanation: 'Managed services usually handle control plane provisioning and upgrades, while you manage worker nodes and workloads.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'What is the purpose of kubectl in your setup steps?',
    options: [
      'To install Docker',
      'To interact with the Kubernetes cluster through the API',
      'To provision cloud VMs',
      'To create Dockerfiles'
    ],
    answer: 1,
    explanation: 'kubectl is the command line client used to manage Kubernetes resources.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'Why is there a verification step using SHA256 during kubectl installation?',
    options: [
      'To check the version of kubectl',
      'To ensure the binary was downloaded correctly and is not corrupted or tampered',
      'To configure kubectl context',
      'To enable auto completion'
    ],
    answer: 1,
    explanation: 'The SHA256 check ensures integrity and authenticity of the downloaded kubectl binary.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'In your Kind example, what command actually creates the cluster?',
    options: [
      'kind start',
      'kubectl create cluster',
      'kind create cluster --config=kind-cluster.yml',
      'docker run kind'
    ],
    answer: 2,
    explanation: 'The command uses kind create cluster with the provided configuration file.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'After creating a Kind cluster, running docker ps shows what?',
    options: [
      'Only user application containers',
      'Kubernetes nodes implemented as Docker containers',
      'Only etcd containers',
      'Only the API server container'
    ],
    answer: 1,
    explanation: 'Each node in a Kind cluster is a Docker container, so docker ps lists them.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'According to your notes, which of the following is a minimum VM spec suggestion for running a local cluster?',
    options: [
      '1 vCPU, 1 GB RAM',
      '2 vCPU, 4 GB RAM, 20 GB disk',
      '8 vCPU, 64 GB RAM, 1 TB disk',
      'No specific specs are needed'
    ],
    answer: 1,
    explanation: 'You suggest a minimum of 2 vCPUs, 4 GB RAM, and 20 GB disk for a VM.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'Which of the following best matches your driving practice analogy?',
    options: [
      'kubeadm equals toy car; minikube equals highway',
      'minikube equals toy track; kind equals scooter',
      'kubeadm equals manual car; minikube equals scooter; kind equals RC track; EKS/AKS/GKE equals real highways',
      'All tools are equivalent in the analogy'
    ],
    answer: 2,
    explanation: 'You map kubeadm to manual car, minikube to scooter, kind to RC track, and managed services to real highways.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'Which of the following is true about kindest/node:v1.26.0 in your Kind YAML?',
    options: [
      'It is the Docker image used for Kubernetes nodes',
      'It is a container runtime',
      'It is the API server image only',
      'It is an etcd backup tool'
    ],
    answer: 0,
    explanation: 'The kindest/node image provides the Kubernetes node environment for Kind clusters.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'Why is it useful to define Kind cluster configuration in YAML instead of only using command line flags?',
    options: [
      'YAML is faster to type',
      'YAML lets you version and store your cluster as code',
      'YAML is required for kubectl',
      'Command line flags do not work for kind'
    ],
    answer: 1,
    explanation: 'Defining Kind clusters in YAML allows you to keep cluster configuration as code and reuse it.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'Which of the following is a typical use case for Minikube compared to Kind?',
    options: [
      'Running multi node clusters inside Docker',
      'Creating a quick single node cluster with built in addons and dashboard',
      'Managing production clusters on AWS',
      'Managing cluster state directly in etcd'
    ],
    answer: 1,
    explanation: 'Minikube is usually used to run a local single node cluster with helpful addons and dashboard.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'Which tool is built specifically for production grade clusters on cloud providers in your notes?',
    options: [
      'kind',
      'minikube',
      'EKS, AKS, GKE',
      'Docker Swarm'
    ],
    answer: 2,
    explanation: 'EKS, AKS, and GKE are managed Kubernetes offerings from AWS, Azure, and GCP respectively.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'Why is Docker needed before running Kind?',
    options: [
      'Kind uses Docker containers to emulate Kubernetes nodes',
      'Docker is used only for logging',
      'kubectl requires Docker',
      'It is needed for etcd backups'
    ],
    answer: 0,
    explanation: 'Kind spins up Kubernetes nodes as Docker containers, so Docker is required.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'What is the primary purpose of kubectl config current context after creating a Kind cluster?',
    options: [
      'To list all pods',
      'To verify and view which cluster kubectl is currently pointing to',
      'To create new pods',
      'To install Docker'
    ],
    answer: 1,
    explanation: 'The kubectl context tells you which cluster and user kubectl commands will target.'
  },
  {
    category: 'Cluster Setup & Tooling',
    question: 'Which of the following best describes the flow in your Kind based setup?',
    options: [
      'Docker runs inside Kubernetes',
      'Kubernetes nodes run inside Docker containers created by Kind',
      'Kubernetes replaces Docker completely',
      'Kubernetes runs only on bare metal'
    ],
    answer: 1,
    explanation: 'Kind uses Docker containers to host Kubernetes nodes.'
  },

  // =========================
  // 4) Workloads: Namespaces, Pods, Deployments
  // =========================
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'What is a namespace in Kubernetes?',
    options: [
      'A physical node in the cluster',
      'A mechanism to logically isolate and group resources within a cluster',
      'A type of pod',
      'A cluster wide network policy'
    ],
    answer: 1,
    explanation: 'Namespaces act like folders in the cluster to isolate and group resources such as pods, services, and deployments.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which command lists all namespaces in a cluster?',
    options: [
      'kubectl get ns',
      'kubectl list namespaces',
      'kubectl get all namespaces',
      'kubectl namespace ls'
    ],
    answer: 0,
    explanation: 'kubectl get ns is the standard shorthand to list namespaces.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'What is special about the default namespace?',
    options: [
      'It cannot be used for workloads',
      'Resources go there when no namespace is specified',
      'It is only for system components',
      'It is created only in managed clusters'
    ],
    answer: 1,
    explanation: 'When you do not specify a namespace, Kubernetes uses the default namespace for your resources.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which namespace contains system level components like CoreDNS?',
    options: [
      'default',
      'kube-node-lease',
      'kube-system',
      'kube-public'
    ],
    answer: 2,
    explanation: 'kube-system hosts system pods such as CoreDNS and kube-proxy.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'What is stored in the kube-node-lease namespace?',
    options: [
      'Pods for user applications',
      'Node lease objects for heartbeats',
      'ConfigMaps for applications',
      'PersistentVolumes'
    ],
    answer: 1,
    explanation: 'kube-node-lease stores heartbeat style lease objects that help detect node health.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which namespace is readable by everyone and used for public information such as cluster details?',
    options: [
      'default',
      'kube-public',
      'kube-system',
      'local-path-storage'
    ],
    answer: 1,
    explanation: 'kube-public is readable by all and is used to share public cluster information.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'In Kind or Minikube clusters, what is local-path-storage used for?',
    options: [
      'Network policies',
      'Node labels',
      'Local storage volumes for pods',
      'Ingress controllers'
    ],
    answer: 2,
    explanation: 'local-path-storage handles local PersistentVolumes backed by host paths in local clusters.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which command creates a namespace named nginx?',
    options: [
      'kubectl create namespace',
      'kubectl create nginx ns',
      'kubectl create namespace=nginx',
      'kubectl create ns nginx'
    ],
    answer: 3,
    explanation: 'kubectl create ns nginx creates a namespace named nginx.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which YAML kind is used to declare a namespace object?',
    options: [
      'Namespace',
      'Pod',
      'Deployment',
      'Service'
    ],
    answer: 0,
    explanation: 'The YAML for a namespace uses kind: Namespace with apiVersion: v1.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'In your notes there is a typo in the namespace YAML kind. What is the correct value?',
    options: [
      'nameapce',
      'namespace',
      'Namespace',
      'name-space'
    ],
    answer: 2,
    explanation: 'The correct value is kind: Namespace with proper capitalization.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which field in a Pod spec specifies the namespace where the Pod will be created?',
    options: [
      'spec.namespace',
      'metadata.ns',
      'metadata.namespace',
      'spec.metadata.namespace'
    ],
    answer: 2,
    explanation: 'The metadata.namespace field determines which namespace the object belongs to.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'In the NGINX pod example, which container image is used?',
    options: [
      'nginx:stable',
      'nginx:alpine',
      'nginx:latest',
      'nginx:1.10'
    ],
    answer: 2,
    explanation: 'Your example uses image: nginx:latest.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'What does containerPort: 80 mean in the pod spec?',
    options: [
      'The port exposed on the host',
      'The port used by the Service',
      'The port on which the application listens inside the container',
      'The node port'
    ],
    answer: 2,
    explanation: 'containerPort specifies the port that the containerized application listens on.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which command applies the pod.yml file to create or update the Pod?',
    options: [
      'kubectl create pod pod.yml',
      'kubectl run pod.yml',
      'kubectl apply -f pod.yml',
      'kubectl start -f pod.yml'
    ],
    answer: 2,
    explanation: 'kubectl apply -f pod.yml applies the manifest.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'How do you list pods in the nginx namespace?',
    options: [
      'kubectl get pods',
      'kubectl get pods nginx',
      'kubectl get pods -n nginx',
      'kubectl get pods --ns'
    ],
    answer: 2,
    explanation: 'kubectl get pods -n nginx lists pods in the nginx namespace.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which command provides detailed information about a specific Pod?',
    options: [
      'kubectl details pod nginx -n nginx',
      'kubectl describe pod nginx -n nginx',
      'kubectl info pod nginx',
      'kubectl inspect pod nginx'
    ],
    answer: 1,
    explanation: 'kubectl describe pod gives detailed information including events and status.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which command allows you to see the logs of a Pod named nginx?',
    options: [
      'kubectl events nginx -n nginx',
      'kubectl log nginx -n nginx',
      'kubectl get logs nginx -n nginx',
      'kubectl logs nginx -n nginx'
    ],
    answer: 3,
    explanation: 'kubectl logs is used to view logs from containers in a pod.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which command opens an interactive shell inside the nginx Pod?',
    options: [
      'kubectl shell nginx -n nginx',
      'kubectl exec -it nginx -n nginx -- bash',
      'kubectl connect nginx -n nginx',
      'kubectl attach nginx -n nginx'
    ],
    answer: 1,
    explanation: 'kubectl exec -it nginx -- bash starts an interactive shell inside the container.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Why is a Deployment preferred over running a single Pod in most cases?',
    options: [
      'Deployments are faster to type',
      'Deployments can manage replicas, self healing, and rolling updates',
      'Pods cannot run containers',
      'Deployments are needed only for system components'
    ],
    answer: 1,
    explanation: 'Deployments bring features like replication, self healing, and rollout strategies.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which of the following is NOT handled directly by a ReplicaSet?',
    options: [
      'Managing a set number of pod replicas',
      'Rolling updates',
      'Ensuring pods match label selectors',
      'Replacing pods when they fail'
    ],
    answer: 1,
    explanation: 'ReplicaSet maintains replica count but does not implement rolling updates; Deployments do.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which workload controller is best suited for databases that need stable identities and storage?',
    options: [
      'Deployment',
      'ReplicaSet',
      'StatefulSet',
      'DaemonSet'
    ],
    answer: 2,
    explanation: 'StatefulSets are designed for stateful applications like databases, with stable identities and storage.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which field in a Deployment spec controls how many pod replicas are desired?',
    options: [
      'spec.count',
      'spec.replicas',
      'spec.pods',
      'spec.size'
    ],
    answer: 1,
    explanation: 'spec.replicas defines the desired number of pod replicas.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'In the nginx Deployment example, how many replicas are requested?',
    options: [
      '1',
      '2',
      '3',
      '5'
    ],
    answer: 1,
    explanation: 'The example sets replicas: 2.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which combination of labels connects the Deployment and its Pods in your example?',
    options: [
      'metadata.name only',
      'selector.matchLabels and template.metadata.labels both using app: nginx',
      'namespace name only',
      'pod IP address'
    ],
    answer: 1,
    explanation: 'The selector and template labels both use app: nginx to associate pods with the Deployment.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which command scales the nginx Deployment to 5 replicas in your example?',
    options: [
      'kubectl scale deployment nginx-deployment --replicas=5',
      'kubectl scale deploy/nginx-deployment -n nginx --replicas=5',
      'kubectl set replicas=5 nginx-deployment',
      'kubectl resize deployment nginx-deployment 5'
    ],
    answer: 1,
    explanation: 'You use kubectl scale deployment/nginx-deployment -n nginx --replicas=5 in the notes.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which command deletes the Deployment using the dep.yml file?',
    options: [
      'kubectl delete deployment nginx-deployment',
      'kubectl remove -f dep.yml',
      'kubectl delete -f dep.yml',
      'kubectl destroy deployment nginx-deployment'
    ],
    answer: 2,
    explanation: 'kubectl delete -f dep.yml removes the resources defined in that file.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which command shows the rollout status of a Deployment?',
    options: [
      'kubectl rollout status deployment/nginx-deployment -n nginx',
      'kubectl status deployment/nginx-deployment -n nginx',
      'kubectl get rollout nginx-deployment -n nginx',
      'kubectl list rollout nginx-deployment -n nginx'
    ],
    answer: 0,
    explanation: 'kubectl rollout status is used to check rollout progress.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which command rolls back a Deployment to the previous version?',
    options: [
      'kubectl rollback deployment/nginx-deployment',
      'kubectl rollout undo deployment/nginx-deployment -n nginx',
      'kubectl revert deployment/nginx-deployment',
      'kubectl deploy undo nginx-deployment'
    ],
    answer: 1,
    explanation: 'kubectl rollout undo reverts to the previous ReplicaSet.'
  },
  {
    category: 'Workloads: Namespaces, Pods, Deployments',
    question: 'Which of the following is an appropriate exercise from your notes to deepen understanding?',
    options: [
      'Create a ConfigMap with no data',
      'Create a ReplicaSet YAML with 3 replicas of nginx',
      'Only run kubectl get nodes',
      'Only edit kubeconfig'
    ],
    answer: 1,
    explanation: 'One of the suggested exercises is to create a ReplicaSet YAML with 3 nginx replicas.'
  },

  // =========================
  // 5) Services & Networking
  // =========================
  {
    category: 'Services & Networking',
    question: 'Why are Services needed in Kubernetes?',
    options: [
      'Pods always keep the same IP address',
      'Pods are immutable and cannot scale',
      'Pod IPs change and pods can move or restart, so a stable access point is required',
      'Services create new namespaces'
    ],
    answer: 2,
    explanation: 'Services provide stable virtual IPs and DNS names despite pod churn.'
  },
  {
    category: 'Services & Networking',
    question: 'Which of the following is the default Service type in Kubernetes?',
    options: [
      'NodePort',
      'LoadBalancer',
      'ClusterIP',
      'ExternalName'
    ],
    answer: 2,
    explanation: 'ClusterIP is the default type and exposes the Service inside the cluster only.'
  },
  {
    category: 'Services & Networking',
    question: 'Which Service type exposes a service on a port on each node, in the 30000-32767 range?',
    options: [
      'ClusterIP',
      'NodePort',
      'LoadBalancer',
      'ExternalName'
    ],
    answer: 1,
    explanation: 'NodePort exposes the service on a static port on each node.'
  },
  {
    category: 'Services & Networking',
    question: 'Which Service type is typically used in cloud environments to expose applications to the internet?',
    options: [
      'ClusterIP',
      'NodePort',
      'LoadBalancer',
      'Headless'
    ],
    answer: 2,
    explanation: 'LoadBalancer services integrate with cloud load balancers such as ELB or GLB.'
  },
  {
    category: 'Services & Networking',
    question: 'Which Service type maps a Service name to an external DNS name?',
    options: [
      'ClusterIP',
      'NodePort',
      'LoadBalancer',
      'ExternalName'
    ],
    answer: 3,
    explanation: 'ExternalName services map to external DNS names, such as mysql.company.com.'
  },
  {
    category: 'Services & Networking',
    question: 'In the nginx Service YAML, what does selector: app: nginx mean?',
    options: [
      'It defines the Service name',
      'It selects pods with label app: nginx to receive traffic',
      'It sets the namespace',
      'It sets the cluster IP'
    ],
    answer: 1,
    explanation: 'Selectors connect the Service to pods with matching labels.'
  },
  {
    category: 'Services & Networking',
    question: 'In the example Service YAML, port: 80 and targetPort: 80 indicate what?',
    options: [
      'The Service listens on one port but forwards to another container port',
      'Both the Service port and container port are 80',
      'Only the node port is 80',
      'The cluster IP is 80'
    ],
    answer: 1,
    explanation: 'In this case, both Service port and containerPort are 80.'
  },
  {
    category: 'Services & Networking',
    question: 'Why can you not access a ClusterIP from your laptop directly using a browser?',
    options: [
      'Because the browser does not support HTTP',
      'Because ClusterIP addresses are part of internal cluster virtual network',
      'Because Pods are not running',
      'Because the API server blocks all traffic'
    ],
    answer: 1,
    explanation: 'ClusterIP is internal to the cluster, so the host network cannot reach it directly.'
  },
  {
    category: 'Services & Networking',
    question: 'In a Kind cluster, why is port forwarding needed to access a ClusterIP service from outside?',
    options: [
      'Because Kind disables all networking',
      'Because the cluster runs inside Docker containers and internal IPs are not reachable from the host',
      'Because kubectl cannot talk to Services',
      'Because Services do not support HTTP'
    ],
    answer: 1,
    explanation: 'The services are inside the Docker network, so kubectl port forwarding exposes them to the host.'
  },
  {
    category: 'Services & Networking',
    question: 'Which command from your notes forwards local port 8080 to port 80 of nginx-service in the nginx namespace?',
    options: [
      'kubectl proxy service/nginx-service 8080:80 -n nginx',
      'kubectl connect service/nginx-service 8080:80 -n nginx',
      'kubectl port-forward service/nginx-service -n nginx 8080:80 --address=0.0.0.0',
      'kubectl tunnel service/nginx-service 8080:80 -n nginx'
    ],
    answer: 2,
    explanation: 'You use kubectl port-forward with service/nginx-service -n nginx 8080:80 in the notes.'
  },
  {
    category: 'Services & Networking',
    question: 'Why might you need sudo -E with port forwarding to use a low port?',
    options: [
      'Because kubectl requires root for all operations',
      'Because ports below 1024 are privileged and Linux restricts binding to them',
      'Because Docker needs sudo',
      'Because Services require root to exist'
    ],
    answer: 1,
    explanation: 'Ports less than 1024 are privileged and binding to them often requires elevated permissions.'
  },
  {
    category: 'Services & Networking',
    question: 'After port forwarding with kubectl, how can users access your NGINX application on an EC2 instance?',
    options: [
      'By connecting to the node internal IP on port 80 only',
      'By using ssh without port',
      'By using http://<EC2_PUBLIC_IP>:8080 in the browser',
      'By using kubectl logs'
    ],
    answer: 2,
    explanation: 'Port forwarding exposes the Service on the host at the given port, which can be reached via the EC2 public IP.'
  },
  {
    category: 'Services & Networking',
    question: 'Which of the following correctly describes the flow of traffic in your example?',
    options: [
      'User -> Pod -> Service -> Container',
      'User -> Service -> Pod -> Container',
      'User -> Node -> etcd -> Pod',
      'User -> API server -> controller manager'
    ],
    answer: 1,
    explanation: 'Traffic flows from user to Service, then to pods and containers.'
  },
  {
    category: 'Services & Networking',
    question: 'In your notes, Services are described as what in the context of pods?',
    options: [
      'Log collectors',
      'Stable doors that always point to the correct pods',
      'Storage volumes',
      'Schedulers'
    ],
    answer: 1,
    explanation: 'You use the analogy of a fixed door that always points to the right pods.'
  },
  {
    category: 'Services & Networking',
    question: 'Which of the following is TRUE about ClusterIP services?',
    options: [
      'They are exposed only inside the cluster',
      'They automatically create a cloud load balancer',
      'They are the same as NodePort services',
      'They require external DNS'
    ],
    answer: 0,
    explanation: 'ClusterIP is internal to the cluster and does not expose the service externally by default.'
  },
  {
    category: 'Services & Networking',
    question: 'Which Service type is most suitable for internal communication between microservices?',
    options: [
      'ClusterIP',
      'NodePort',
      'LoadBalancer',
      'ExternalName'
    ],
    answer: 0,
    explanation: 'ClusterIP services are perfect for internal communication in the cluster.'
  },
  {
    category: 'Services & Networking',
    question: 'Which Service type would be used if your application needs to be reachable directly from the internet in AWS with a managed load balancer?',
    options: [
      'ClusterIP',
      'NodePort',
      'LoadBalancer',
      'ExternalName'
    ],
    answer: 2,
    explanation: 'A LoadBalancer service integrates with AWS load balancers like ELB or NLB.'
  },
  {
    category: 'Services & Networking',
    question: 'What is the effect of changing a Service selector to a different label?',
    options: [
      'Pods are deleted',
      'New pods are automatically created',
      'The Service routes traffic to a different set of pods that match the new selector',
      'The namespace is deleted'
    ],
    answer: 2,
    explanation: 'Service routing is based on selectors and matching pod labels.'
  },
  {
    category: 'Services & Networking',
    question: 'If you delete all pods behind a Service and new pods with the same labels are created, what happens to the Service IP?',
    options: [
      'It changes with every pod restart',
      'It is deleted',
      'It remains the same and points to new pods',
      'It becomes a NodePort'
    ],
    answer: 2,
    explanation: 'The Service IP stays stable; endpoints change to new pods.'
  },
  {
    category: 'Services & Networking',
    question: 'Which kubectl command shows you all Services in the nginx namespace?',
    options: [
      'kubectl get services',
      'kubectl get svc -n nginx',
      'kubectl list services nginx',
      'kubectl describe svc'
    ],
    answer: 1,
    explanation: 'kubectl get svc -n nginx lists all Services in that namespace.'
  },
  {
    category: 'Services & Networking',
    question: 'Where is the ClusterIP for a Service defined or shown?',
    options: [
      'In the Pod spec',
      'Inside the Deployment YAML',
      'In kubectl get svc output and Service status',
      'In the Dockerfile'
    ],
    answer: 2,
    explanation: 'kubectl get svc displays the ClusterIP for each Service.'
  },
  {
    category: 'Services & Networking',
    question: 'If you apply a Service YAML that uses type: ClusterIP but later need external access, what is a simple approach in your local Kind setup?',
    options: [
      'Change the Service type to ExternalName',
      'Change the Service type to NodePort and expose a node port',
      'Delete the Service only',
      'Run a StatefulSet'
    ],
    answer: 1,
    explanation: 'You can change the Service type to NodePort or use port forwarding for external access.'
  }
];
