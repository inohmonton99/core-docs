---
title: MicroK8s installation guide
sidebar_label: Installing on MicroK8s
description: Deploy Onepanel on MicroK8s
---

This document outlines the installation steps for single node installation using [Multipass](https://multipass.run/) VM and [MicroK8s](https://microk8s.io/).

## Install MicroK8s with Multipass

First, install Multipass for your operating system:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="linux"
  values={[
    { label: 'Linux', value: 'linux', },
    { label: 'macOS', value: 'macos', },
    { label: 'Windows', value: 'windows', },
  ]
}>
<TabItem value="linux">

:::important Instructions
See [Installing on Linux](https://multipass.run/docs/installing-on-linux)
:::

</TabItem>
<TabItem value="macos">

:::important Instructions
See [Installing on macOS](https://multipass.run/docs/installing-on-macos)
:::

</TabItem>
<TabItem value="windows">

:::important Instructions
See [Installing on Windows](https://multipass.run/docs/installing-on-windows)
:::

</TabItem>
</Tabs>

With multipass installed, you can now create a VM to run MicroK8s. At least 4 Gigabytes of RAM and 40G of storage is recommended – you can pass these requirements when you launch the VM:

```bash
multipass launch --name microk8s-vm --mem 4G --disk 40G
```

You can now find the IP address which has been allocated by running:

```bash
multipass list
```

Will return something like:

```bash
Name                    State             IPv4             Release
microk8s-vm             RUNNING           10.72.145.216    Ubuntu 18.04 LTS
```

Take a note of this IP as you will need to add it to your `params.yaml`.

Run a shell into your VM:

```bash
multipass shell microk8s-vm
```

Install the MicroK8s snap and configure the network:

```bash
sudo snap install microk8s --classic --channel=1.17/stable
sudo iptables -P FORWARD ACCEPT
```

You will also need to add `ubuntu` user to `microk8s` group as follows:

```bash
sudo usermod -a -G microk8s ubuntu
```

Then, enable the following required add-ons:

```bash
sudo microk8s.enable storage dns
```

```bash
sudo microk8s.enable dashboard
```

## Install Onepanel

1. Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/core/releases/latest).

2. Run the following command to initialize a `params.yaml` template for microk8s:

```bash
opctl init --provider microk8s
```

3. Populate `params.yaml` by following the instructions in the template, you can also refer to the [configuration files](/docs/deployment/configuration/files) section.

4. Get Kubernetes config from MicroK8s:

```bash
multipass exec microk8s-vm -- /snap/bin/microk8s.config > kubeconfig
```

5. Finally, run the following command to deploy to your cluster:

```bash
KUBECONFIG=./kubeconfig opctl apply
```

:::important
The CLI will display the URL for accessing Onepanel once the deployment completes.
:::

6. Use the following command to get your auth token to log into Onepanel:

```bash
KUBECONFIG=./kubeconfig opctl auth token
```