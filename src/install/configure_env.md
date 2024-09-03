# Configure Your Development Environment

To start working on aplang projects, it is recommended to use Visual Studio Code (VS Code). Git is not strictly required, but it is highly recommended for version control.

## Step 1: Install Git

### Install Git

1. **Download Git**:
   - Go to the [Git website](https://git-scm.com/downloads).
   - Choose your operating system and download the appropriate installer.

2. **Install Git**:
   - **Windows**: Run the downloaded `.exe` file and follow the installation prompts.
   - **macOS**: Open the `.dmg` file and follow the installation instructions.
   - **Linux**: Install Git using your package manager:
     - **Debian/Ubuntu**: Run `sudo apt-get install git`.
     - **Fedora**: Run `sudo dnf install git`.
     - **Arch Linux**: Run `sudo pacman -S git`.

3. **Verify Installation**:
   - Open your terminal or command prompt.
   - Run `git --version` to check that Git is installed correctly.

### Install GitHub Desktop

1. **Download GitHub Desktop**:
   - Go to the [GitHub Desktop website](https://desktop.github.com/).
   - Download the installer for your operating system.

2. **Install GitHub Desktop**:
   - **Windows/macOS**: Run the installer and follow the prompts to complete the installation.

## Step 2: Install Visual Studio Code (VS Code)

### Install VS Code

#### Install VS Code on Windows

1. **Visit the VS Code download page**: [VS Code Download](https://code.visualstudio.com/Download).

2. **Download the installer for Windows**: Click on the "Windows" download link.

3. **Run the installer**: Double-click the installer file (`VSCodeSetup-x64-<version>.exe`).

4. **Follow the installation prompts**:
   - Accept the license agreement and click "Next."
   - Choose the destination folder or leave it as the default.
   - Select additional tasks: It is recommended to check "Add to PATH" and "Register code as an editor for supported file types."
   - Click "Next," then "Install."

5. **Finish the installation**: Click "Finish" to complete the installation. Optionally, launch VS Code immediately by checking the "Launch Visual Studio Code" option.

#### Install VS Code on Linux

1. **Visit the VS Code download page**: [VS Code Download](https://code.visualstudio.com/Download).

2. **Download the installer for Linux**:
   - **Debian-based distributions (Ubuntu, etc.)**: Download the `.deb` file.
   - **Red Hat-based distributions (Fedora, etc.)**: Download the `.rpm` file.

3. **Install VS Code**:
   - **Debian-based distributions**: Run the following commands in your terminal:
     ```bash
     sudo dpkg -i <path-to-file>.deb
     sudo apt-get install -f
     ```
   - **Red Hat-based distributions**: Run the following command:
     ```bash
     sudo rpm -i <path-to-file>.rpm
     ```

4. **Launch VS Code**: Start VS Code from the applications menu or by typing `code` in your terminal.

#### Install VS Code on macOS

1. **Visit the VS Code download page**: [VS Code Download](https://code.visualstudio.com/Download).

2. **Download the installer for macOS**: Click on the "macOS" download link to download a `.zip` file.

3. **Install VS Code**:
   - Open the `.zip` file to extract the contents.
   - Drag the extracted `Visual Studio Code.app` file to your "Applications" folder.

4. **Launch VS Code**: Open your "Applications" folder and double-click "Visual Studio Code." Alternatively, use Spotlight (`Cmd + Space`) to search for "Visual Studio Code."

## Step 3: Set Up a Project Directory

### Create a GitHub Repository with GitHub Desktop

1. **Open GitHub Desktop**: Launch the GitHub Desktop application.

2. **Create a New Repository**:
   - Click on "File" > "New Repository."
   - Fill in the repository name and choose the local path where you want to create the repository.
   - Click "Create Repository."

### Open the Project Directory in VS Code

#### Using GitHub Desktop

1. **Open the Repository in VS Code**:
   - In GitHub Desktop, make sure your repository is selected.
   - Click on the "Repository" menu, then select "Open in Visual Studio Code." This will open the repository in VS Code.

2. **Alternative Method**:
   - If the "Open in Visual Studio Code" button is not available, click on the "Show in Explorer" (Windows) or "Show in Finder" (macOS) button to open the repository folder in your file explorer.
   - Right-click the folder and select "Open with Code" (if this option is available) or open VS Code, click on "File" > "Open Folder..." and navigate to your repository directory.

### Create the `main.ap` File

1. **Open VS Code**: Launch Visual Studio Code.

2. **Create a New File**: Click on "File" > "New File" or press `Ctrl + N` (`Cmd + N` on macOS).
3. **Add Code**: Enter the following code into your file
	```ap 
   DISPLAY("Hello World!")
	```
1. **Save the File**: Click on "File" > "Save As..." or press `Ctrl + S` (`Cmd + S` on macOS). Name the file `main.ap` and save it in your project directory.
2. **(Recommended)**: Also Enable autosave from from the "File" context menu.
## Step 4: Run the `main.ap` File with the `aplang` Binary

1. **Open Integrated Terminal in VS Code**:
   - Go to "View" > "Terminal" or press `` Ctrl + ` ``.

2. **Run the File**: In the terminal, navigate to the directory containing `main.ap` and run the file using the `aplang` binary. You should see the output `Hello World!` in your console.

## Conclusion

Congratulations! You have successfully setup an `aplang` project. You can now begin to develop more complex programs using `aplang`. You are ready to begin following along with the rest of this book.
## [Troubleshooting](installation.md)